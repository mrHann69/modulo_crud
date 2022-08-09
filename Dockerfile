FROM node:16
WORKDIR /backend
COPY package*.json ./
RUN npm cache clean --force
RUN npm install
EXPOSE 4000
COPY ./src .
COPY ./src/.env .

