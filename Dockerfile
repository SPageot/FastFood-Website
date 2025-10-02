FROM node:22

WORKDIR /fastfoodsite

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]