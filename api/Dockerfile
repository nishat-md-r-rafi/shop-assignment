FROM node:18-alpine
WORKDIR /api


COPY package.json .
COPY package-lock.json .

RUN npm install 

COPY . .


CMD [ "npm", "start" ]