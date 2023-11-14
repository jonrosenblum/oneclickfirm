# Use an official Python runtime as a parent image
FROM python:3.11 AS base_im

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
ENV PORT 8000

# Install wget, make and Google Chrome
RUN apt-get update && apt-get install -y wget make firefox-esr


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

# Run the application
CMD cd server && HOST=0.0.0.0 PORT=$PORT pipenv run python run.py 




#  make production image from BASE_IM
FROM base_im AS prod_im

RUN make build

# Run the application
CMD cd server && HOST=0.0.0.0 PORT=$PORT pipenv run python run.py 