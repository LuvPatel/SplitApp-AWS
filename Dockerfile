# Step 1: Use official Node.js image as base image
FROM node:16-slim

# Step 2: Set the working directory in the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json (if present)
COPY package*.json ./

COPY global-bundle.pem /app/global-bundle.pem

COPY db.js /app/db.js

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy all other files into the container
COPY . .

# Step 6: Expose the port that the app will run on
EXPOSE 3001

# Step 7: Define the command to run the app
CMD ["npm", "start"]
