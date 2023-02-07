FROM node:14-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

# Build TypeScript
RUN npm run build

EXPOSE 9002
EXPOSE 9229
CMD [ "npm", "run", "start:dev" ]
