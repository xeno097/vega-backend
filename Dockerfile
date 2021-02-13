FROM node:12-alpine

WORKDIR /usr/src/app

COPY ./package* ./

RUN npm i --only=prod 

COPY . .

CMD [ "npm","run","start:dev" ]
