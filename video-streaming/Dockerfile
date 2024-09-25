FROM node:18.5.0

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci --omit=dev
COPY ./src ./src
COPY ./videos /usr/src/app/videos
RUN ls -l /usr/src/app/videos

CMD npm start