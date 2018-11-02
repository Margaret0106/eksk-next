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

EXPOSE 32772
<<<<<<< HEAD
CMD [ "yarn", "start", "-p", "32772" ] 
=======
CMD [ "yarn", "start", "-p", "32772" ]
>>>>>>> e0f5c605c56a3390eda2edd6ad3901ca9c145743
