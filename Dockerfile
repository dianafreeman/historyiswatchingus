FROM node:10-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json /app/

RUN npm install 

COPY . .

EXPOSE 3002

CMD ["npm", "run", "dev:server"]