FROM node:16-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci 
COPY . .
RUN npm run build

FROM node:16-alpine as production
WORKDIR /app
COPY --from=builder /app/package*.json ./
RUN npm ci --omit=dev
COPY --from=builder /app/build ./build
EXPOSE 3001
CMD ["node", "build/app.js"]