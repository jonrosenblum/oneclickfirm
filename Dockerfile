# Use an official Python runtime as a parent image
FROM python:3.11 AS base_im

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
ENV PORT 8000

# Install wget, make and Google Chrome
RUN apt-get update && apt-get install -y wget make firefox-esr nodejs npm
# RUN    wget https://github.com/mozilla/geckodriver/releases/download/v0.30.0/geckodriver-v0.30.0-linux64.tar.gz \
#     && tar -xvzf geckodriver-v0.30.0-linux64.tar.gz \
#     && chmod +x geckodriver \
#     && mv geckodriver /usr/local/bin/

# Install pipenv
RUN pip install --upgrade pip
RUN pip install pipenv

# Set work directory
WORKDIR /app

RUN mkdir /app/server 
RUN mkdir /app/client

COPY ./server/Pipfile /app/server/Pipfile
COPY ./client/package.* /app/client/
COPY ./package.* /app/
COPY Makefile /app/Makefile


# install project dependencies
RUN make install

# Copy the current directory contents into the container at /app
COPY . /app

# Make port available to the world outside this container
EXPOSE $PORT 5173 5000

FROM base_im AS prod_im
RUN npm run build

# Run the application
CMD cd server && PORT=$PORT pipenv run python run.py 