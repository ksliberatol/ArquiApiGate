FROM node:carbon-slim

# Create app directory
WORKDIR /apigate

# Install app dependencies
COPY package.json /apigate/
RUN npm install

# Bundle app source
COPY . /apigate/
RUN npm run prepublish

CMD [ "npm", "run", "runServer" ]
