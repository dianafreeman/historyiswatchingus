

# Starting with the Node Alpine Docker Image
# ---------------------------
FROM node:10-alpine AS node-base

RUN apk update && apk upgrade && apk add --update --no-cache \
  bash \
  wait4ports

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /.
COPY yarn.lock /.

RUN yarn install


# Server Dev
# ---------------------------
FROM node-base AS server-dev

WORKDIR /app/server

COPY ./server ./

EXPOSE 3002

CMD ["yarn", "start"]


# Client Dev
# ---------------------------
FROM node-base AS client-dev

COPY . .

EXPOSE 3000

CMD ["yarn", "start"]


# Client Storybook
# ---------------------------
FROM node-base AS client-storybook

COPY . .

EXPOSE 9002

CMD ["yarn", "run", "storybook"]