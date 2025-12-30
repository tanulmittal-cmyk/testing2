# Build Stage
FROM node:20-alpine as build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Production Stage
FROM nginx:alpine

# Copy built assets from the build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom nginx configuration if needed, using default for now
# The default nginx configuration serves from /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
