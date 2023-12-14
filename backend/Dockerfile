FROM node:18

WORKDIR /backend

COPY  ./backend/package.json .

RUN npm pkg delete scripts.prepare
RUN npm i 

COPY . .

ENTRYPOINT [ "npm", "run", "start" ]