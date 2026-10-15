# -----------------------------
# Stage 1 - Build React/Vite App
# -----------------------------
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all project files
COPY . .

# Build production app
RUN npm run build


# -----------------------------
# Stage 2 - Serve Using Nginx
# -----------------------------
FROM nginx:stable-alpine

# Copy built files from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose container port
EXPOSE 80

# Start nginx server
CMD ["nginx", "-g", "daemon off;"]