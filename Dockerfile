FROM node:18-alpine

# Set working directory inside container
WORKDIR /app

# Copy only package files first to install deps (cache efficient)
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm install

# Copy the rest of the files
COPY . .

# Run your proxy
CMD ["node", "server.js"]
