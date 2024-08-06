# Use the official Node.js image as a base
FROM node:14

# Create and change to the app directory
WORKDIR /srv/app

# Copy application code
COPY . .

# Install dependencies
RUN npm install

# Expose the port the app runs on
EXPOSE 1337

# Start the app
CMD ["npm", "run", "develop"]
