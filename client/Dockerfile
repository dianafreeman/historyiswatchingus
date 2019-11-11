FROM node:10-alpine

WORKDIR /usr/src/app/client

COPY package*.json ./

RUN npm install --quiet

COPY . .

EXPOSE 3000

CMD ["npm", "start"]