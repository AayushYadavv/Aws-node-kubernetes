
FROM node:latest

MAINTAINER Aayush Yadav

RUN echo "Building stuff"

COPY . /var/www

WORKDIR /var/www

RUN npm install

EXPOSE 3000
