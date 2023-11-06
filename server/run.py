from app import app
import os

if __name__ == "__main__":
    app.run(debug=os.environ.get('DEBUG') if "DEBUG" in os.environ.keys() else False,port=os.environ.get('PORT'),host=os.environ.get('HOST') if 'HOST' in os.environ.keys() else 'http://localhost')
