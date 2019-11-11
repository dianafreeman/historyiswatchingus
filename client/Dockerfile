FROM node:10-alpine AS client-img

RUN apk update && apk upgrade && apk add --update --no-cache \
  bash \
  wait4ports

WORKDIR /app


ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY yarn.lock ./

RUN yarn install 

# Client Dev
# ---------------------------
FROM client-img AS client-dev

COPY . .

EXPOSE 3000

CMD ["yarn", "start"]

# Client Storybook
# ---------------------------
FROM client-img AS client-storybook

COPY . .

EXPOSE 9002

CMD ["npm", "run", "storybook"]