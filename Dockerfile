# Use Node image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Set environment to production
ENV NODE_ENV=production

# Install dependencies
RUN npm install --production

# Copy all app files
COPY . .

# Expose port
EXPOSE 5000

# Start the server
CMD ["node", "server.js"]
