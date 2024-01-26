# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install any needed packages specified in package.json
RUN npm install

# Bundle app source
COPY . .

# Expose port 8080
EXPOSE 8080

# Define environment variable
ENV NODE_ENV=production

# Command to run your application
CMD ["node", "app.js"]
