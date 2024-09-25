FROM node:14

WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install
# Explicitly install mongodb
RUN npm install mongodb

# Copy the seeder script
COPY seeder.js .

# Run the seeder script
CMD ["node", "seeder.js"]