# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json if they exist
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your app's files
COPY . .

# Expose the port your app uses (you can change 5000 to your actual PORT if different)
EXPOSE 5000

# Command to run the app
CMD ["npm", "start"]
