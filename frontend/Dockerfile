FROM node:18

WORKDIR /frontend

COPY ./frontend/package.json .

RUN npm pkg delete scripts.prepare
RUN npm i 

RUN npm run build

COPY . .

ENTRYPOINT [ "npm", "run", "start" ]