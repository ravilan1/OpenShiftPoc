FROM node:alpine
WORKDIR /usr/app
COPY  package.json ./
RUN npm install
COPY . .
EXPOSE 5050
CMD ["node","test.js"]
