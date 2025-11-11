FROM node:22

WORKDIR /app

COPY package.json ./

RUN npm install

COPY server.js ./
COPY public/ ./public

CMD ["npm", "run", "start"]