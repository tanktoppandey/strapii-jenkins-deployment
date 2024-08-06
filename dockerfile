# Use the official Node.js image based on Alpine for a smaller footprint
FROM node:18-alpine

# Install necessary packages for build tools and dependencies
RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev git

# Set the environment variable for Node.js
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

# Set the working directory
WORKDIR /opt/

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install -g node-gyp
RUN npm config set fetch-retry-maxtimeout 600000 -g && npm install

# Set PATH to include locally installed binaries
ENV PATH /opt/node_modules/.bin:$PATH

# Set the application working directory
WORKDIR /opt/app

# Copy the rest of the application code
COPY . .

# Ensure proper permissions for the application
RUN chown -R node:node /opt/app
USER node

# Build the application
RUN ["npm", "run", "build"]

# Expose the port the application will run on
EXPOSE 1337

# Start the application
CMD ["npm", "run", "develop"]
