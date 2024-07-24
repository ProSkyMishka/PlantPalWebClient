FROM node:18-alpine
# Set the working directory in the container
WORKDIR /web
# Copy package.json and package-lock.json to the working directory
COPY package*.json ./
# Install project dependencies
RUN npm install
COPY . .
# Expose the port on which your React app will run (default is 3000)
EXPOSE 3000
# Start the React app
CMD [“npm”, “start”]