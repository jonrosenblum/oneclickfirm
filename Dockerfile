# Use Ubuntu 22.04 as a parent image
FROM ubuntu:22.04 AS prod_im

# Install Python and pip
RUN apt-get update && apt-get install -y python3 python3-pip

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
ENV PORT 8000

# Install wget, make and Google Chrome
RUN apt-get update && apt-get install -y wget make firefox
# RUN    wget https://github.com/mozilla/geckodriver/releases/download/v0.30.0/geckodriver-v0.30.0-linux64.tar.gz \
#     && tar -xvzf geckodriver-v0.30.0-linux64.tar.gz \
#     && chmod +x geckodriver \
#     && mv geckodriver /usr/local/bin/


# Set work directory
WORKDIR /app

RUN mkdir /app/server 
RUN mkdir /app/client

COPY ./server/Pipfile /app/server/Pipfile
COPY ./client/package.json /app/client/package.json
COPY Makefile /app/Makefile

# Install pipenv
RUN pip install --upgrade pip
RUN pip install pipenv

RUN apt-get update && apt-get install -yf nodejs npm
RUN which node && npm -v && node -v

# install project dependencies
RUN make install

# # Install dependencies
# RUN pipenv install --system --deploy


# Copy the current directory contents into the container at /app
COPY . /app

# Make port available to the world outside this container
EXPOSE $PORT


RUN make build

# Run the application
CMD cd server && HOST=0.0.0.0 PORT=$PORT pipenv run python run.py 