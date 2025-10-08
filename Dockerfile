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
