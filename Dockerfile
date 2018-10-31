FROM node:carbon-alpine

# Create app directory
WORKDIR /etc/frontend

# Install app dependencies
COPY package.json .
COPY yarn.lock .

RUN yarn cache clean
RUN yarn install

# Bundle app source
COPY . .

RUN yarn build

EXPOSE 3000
CMD [ "yarn", "start" ]