FROM node:latest

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY api/package*.json ./
RUN npm install

# Bundle app source
COPY api/ .

# Build TypeScript
RUN npm run build