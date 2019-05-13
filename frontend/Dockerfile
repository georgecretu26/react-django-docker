FROM node:12.2-alpine

MAINTAINER narciscretu26@gmail.com

RUN mkdir /app
WORKDIR /app/frontend
COPY /src /app/src
COPY package*.json ./

RUN npm install

EXPOSE 3000
