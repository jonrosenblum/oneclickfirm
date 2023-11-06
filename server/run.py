from app import app
import os

if __name__ == "__main__":
    DEBUG = (os.environ.get('DEBUG') if "DEBUG" in os.environ.keys() else 'False') == 'True'
    PORT=os.environ.get('PORT')
    HOST=os.environ.get('HOST') ##if 'HOST' in os.environ.keys() else 'http://localhost'
    print({'host': HOST, 'port': PORT, 'debug': DEBUG})
    app.run(debug=DEBUG,port=PORT,host=HOST)
