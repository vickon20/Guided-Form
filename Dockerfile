# inherit from a existing image to add the functionality
FROM node:20-alpine

RUN addgroup -S appgroup && adduser -S appuser -G appgroup

USER appuser

# Set the working directory and assign ownership to the non-root user
WORKDIR /app

# Copy the package.json and package-lock.json files into the image.
COPY package*.json ./

# change ownership of the /app directory to the app user
USER root

# change ownership of the /app directory to the app user
# chown -R <user>:<group> <directory>
# chown command changes the user and/or group ownership of for given file.
RUN chown -R appuser:appgroup .

# change the user back to the app user
USER appuser

# Install the dependencies.
RUN npm install

COPY ./prisma prisma

RUN prisma generate

# Copy the rest of the source files into the image.
COPY . .

# Expose the port that the application listens on.
EXPOSE 3000

# Run the application.
CMD npm run dev
