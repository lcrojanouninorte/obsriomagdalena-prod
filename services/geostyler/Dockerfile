FROM node:12.19.0-alpine3.9
ENV NODE_ENV=production
WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --production
COPY . .
CMD [ "cli.js -t ${type} -c ${id} -i ${input}"]
