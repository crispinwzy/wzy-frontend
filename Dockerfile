FROM node:13.8.0

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

RUN mkdir -p /app
WORKDIR /app

COPY . /app
RUN npm install
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]