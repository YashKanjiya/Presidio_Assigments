# Use an official Node.js LTS image as the base image
FROM node:14-alpine AS build

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and yarn.lock file to the working directory
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the rest of the application code to the working directory
COPY . .

# Build the React application with Vite
RUN yarn build

# Use a lightweight Node.js image as the final image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the built app from the previous stage to the current working directory
COPY --from=build /app/build ./build

# Expose the port the app runs on
EXPOSE 5174 

# Run the React application
CMD ["node", "./build/index.js"]
