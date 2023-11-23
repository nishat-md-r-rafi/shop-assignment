FROM node:18-alpine
WORKDIR /api


COPY package.json .
COPY package-lock.json .

RUN npm install --network-timeout 1000000

COPY . .

EXPOSE 4000

CMD [ "npm", "start" ]