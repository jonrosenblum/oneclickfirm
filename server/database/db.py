from dotenv import load_dotenv
import os
import psycopg2

# Load environment variables from .env file
load_dotenv()

# Get environment variables
hostname = os.getenv("DATABASE_HOST")
database = os.getenv("DATABASE_NAME")
username = os.getenv("DATABASE_USER")
pwd = os.getenv("DATABASE_PASSWORD")
port_id = os.getenv("DATABASE_PORT")

# Create a database connection
try:
    print("Connecting to the database...")
    conn = psycopg2.connect(host=hostname, dbname=database, user=username, password=pwd, port=port_id)
    print("Connected to the database!")

# Close the connection
    conn.close()
    print("Connection closed!")
except Exception as error:
    print(error)
