# Rebuild trigger - 8 Oct 2025
FROM node:18
WORKDIR /app
COPY package*.jason ./
RUN npm install--production
COPY . .
EXPOSE 3000 
ENV NODE_ENV=production
CMD ["node","server.js"]
# Use the official Node.js image
FROM node:18
# Set working directory
WORKDIR /app
# Copy package files first
COPY package*.json ./
# Install dependencies
RUN npm install –production
# Copy all other files
COPY . .
# Expose the port your server listens on (change if not 3000)
EXPOSE 3000
# Set environment variable for production
ENV NODE_ENV=production
# Start the app
CMD [“node”, “server.js”]
