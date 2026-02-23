FROM node:22-alpine

WORKDIR /app

COPY ./package*.json ./

RUN npm install

COPY . .



ENV DATABASE_URL="postgresql://placeholder:placeholder@localhost:5432/placeholder"

RUN npx prisma generate

RUN npm run build

CMD ["/bin/sh","-c","npx prisma migrate deploy && npm run start"]
