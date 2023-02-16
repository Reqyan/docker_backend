
# FROM docker
# COPY --from=docker/buildx-bin:latest /buildx /usr/libexec/docker/cli-plugins/docker-buildx
# RUN docker buildx version
FROM node:19
WORKDIR /app
COPY package.json .
RUN npm install
COPY . ./
EXPOSE 5000
CMD ["npm", "run", "dev"]