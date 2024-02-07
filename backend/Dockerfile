# Use a Node.js LTS image as the base image
FROM node:alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose port 5000 (or any other port your Express.js server listens on)
EXPOSE 4000

# Command to run the Express.js application
CMD ["npm", "start"]