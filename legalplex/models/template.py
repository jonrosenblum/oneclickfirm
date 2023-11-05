import psycopg2 as pc
from psycopg2 import OperationalError
from dotenv import load_dotenv
import os

load_dotenv()

class DB:

    def __init__(self) -> None:
        username = os.getenv('DB_USERNAME')
        password = os.getenv('DB_PASSWORD')
        host = os.getenv('DB_HOST')
        port = os.getenv('DB_PORT')
        self.db_name = os.getenv('DB_NAME')
        db_url = f'postgresql://{username}:{password}@{host}:{port}'
        
        try:
            db_url_with_db_name = db_url + f'/{self.db_name}'
            self.conn = pc.connect(db_url_with_db_name)
            self.cursor = self.conn.cursor()
            db_url = db_url_with_db_name  
        except:
            #if database does not exist, create database and reconnect
            self.conn = pc.connect(db_url)
            self.cursor = self.conn.cursor()
            self.conn.autocommit = True
            self.create_database()
            self.conn.close()
            self.__init__()
        print(f'DB URL - {db_url}')

        #create tables if not exists
        self.create_templates_table()
        self.create_clients_table() 
        self.create_violations_table()

    def drop_database(self) -> None:
        sql = f'''
        DROP DATABASE "{self.db_name}"
        '''
        self.cursor.execute(sql)
        self.conn.commit()

    def create_database(self) -> None:
        print('CREATING DATABASE...')
        sql = f'''
        CREATE DATABASE  "{self.db_name}"
        '''
        self.cursor.execute(sql)
        self.conn.commit()

    def create_templates_table(self) -> None:
        sql = '''
        CREATE TABLE IF NOT EXISTS template (
            template_id SERIAL PRIMARY KEY,
            name VARCHAR,
            pdf_data BYTEA
        );
        '''
        self.cursor.execute(sql)
        self.conn.commit()

    def create_clients_table(self) -> None:
        #NOT SAVING TODAYS DATE
        sql = '''
        CREATE TABLE IF NOT EXISTS client (
            client_id SERIAL PRIMARY KEY,
            fax_number VARCHAR,
            phone_number VARCHAR,
            court_house_name VARCHAR,
            court_house_street VARCHAR,
            court_house_city VARCHAR,
            court_house_state VARCHAR,
            court_house_zip VARCHAR,            
            client_name VARCHAR,
            client_age SMALLINT,
            client_birth_place VARCHAR
        );
        '''
        self.cursor.execute(sql)
        self.conn.commit()

    def create_violations_table(self) -> None:
        sql = f'''
        CREATE TABLE IF NOT EXISTS violation (
            client_id INTEGER,
            violation_number VARCHAR NOT NULL,
            FOREIGN KEY(client_id) REFERENCES client(client_id)
        );
        '''
        self.cursor.execute(sql)
        self.conn.commit()

    def get_client_id(self, data) -> int:
        sql = '''
        SELECT client_id
        FROM "client"
        WHERE client_name = %s
            AND client_age = %s
            AND client_birth_place = %s
        '''
        self.cursor.execute(sql, data)
        result = self.cursor.fetchone()
        if type(result) == tuple:
            return result[0]
        return None

    def insert_client_info(self, data:dict) -> None:
        sql = '''
        INSERT INTO "client" ({})
        VALUES ({})
        '''

        placeholders = ', '.join(['%s' for _ in data.values()])
        values = tuple(data.values())
        columns = ', '.join(data.keys())

        query = sql.format(columns, placeholders)
        self.cursor.execute(query, values)
        self.conn.commit()
        
    def insert_violation(self, client_id:int, violation_number:str) -> None:
        sql = '''
        INSERT INTO "violation"(client_id, violation_number)
        SELECT %s, %s
        WHERE 
            NOT EXISTS (
                SELECT violation_number 
                FROM "violation" 
                WHERE violation_number = %s
            ) 
        '''
        self.cursor.execute(sql, (client_id, violation_number, violation_number))
        self.conn.commit()


if __name__ == '__main__':
    DB()