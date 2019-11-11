FROM node:10-alpine

RUN mkdir -p /usr/src/app/

WORKDIR /usr/src/app/
COPY . .

RUN npm install -g nodemon --quiet

RUN npm install --quiet

EXPOSE 8080

CMD ["npm", "run", "start:server"]