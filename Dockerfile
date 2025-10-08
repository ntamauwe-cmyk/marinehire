# Use the official Node.js image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy all source code
COPY . .

# Expose the port your app uses (commonly 3000 or 5000)
EXPOSE 3000

# Define environment variable for production
ENV NODE_ENV=production

# Start the app
CMD ["node", "user.js"]
