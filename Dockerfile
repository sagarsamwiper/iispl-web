# Stage 1: Install dependencies
FROM node:18 AS dependencies
WORKDIR /app
COPY package.json .
RUN npm install

# Stage 2: Build the application
FROM dependencies AS build
WORKDIR /app
COPY . .
RUN npm run build

# Stage 3: Final stage
FROM node:18
WORKDIR /app
COPY --from=build /app/build ./build
RUN npm install -g serve

# Set the command to run on container start
CMD ["npm", "start"]
