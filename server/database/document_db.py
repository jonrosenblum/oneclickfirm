from dotenv import load_dotenv
import os
import psycopg2
from operations import init_db, get_db_session, add_templates_from_directory

# Load environment variables from .env file
load_dotenv()

# Get environment variables
hostname = os.getenv("DATABASE_HOST")
database = os.getenv("DATABASE_NAME")
username = os.getenv("DATABASE_USER")
pwd = os.getenv("DATABASE_PASSWORD")
port_id = os.getenv("DATABASE_PORT")

def main():
    try:
        # Establish the database connection
        print("Connecting to the database...")
        # Use psycopg2 to connect to the database
        conn = psycopg2.connect(host=hostname, dbname=database, user=username, password=pwd, port=port_id)
        print("Connected to the database!")

        # Initialize the database schema
        init_db()

        # Create a database session
        session = get_db_session()
        
        try:
            # Add templates from a directory to the database
            add_templates_from_directory(session, '/path/to/templates_directory')

        except Exception as error:
            print(f"An error occurred: {error}")
        finally:
            session.close()
            

    except Exception as error:
        print(error)
    finally:
        if conn is not None:
            conn.close()
            print("Connection closed.")

if __name__ == "__main__":
    main()
