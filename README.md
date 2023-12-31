## Getting Started

- First, its important to understand that the repo contains the both 'repos' for the backend and for the frontend.

- Second, you will need npm version over 10 and node over 20.

So, go to the backend folder and run to install and then to run the api on port 8080:

```bash
npm install
npm run start
```

Then, you must go to the frontend file and run the same commands:

```bash
npm install
npm run build
npm run start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the Phone Book.

## About the project

Backend:

- Typescript
- Node.js
- Express
- Jest and superjest
- Nodemon
- Swagger (To check the documentation open [http://localhost:8080/api-docs](http://localhost:8080/api-docs))

Frontend:

- Typescript
- React.js
- NextJS
- Axios (I think it's great to use with Next on client side data data fetch)
- Tailwind
- Shadcn/ui

## On matter of tests

```bash
npm test
```

Important: To run the tests, its necessary to stop the backend on port 8080 cause the integration tests are using the same port.

I've created tests only for the backend, covering 100% of all my code. Using unit tests for the controllers and services, and integration tests for the routes.

## TODO

Already installed and created the files that the docker, but im still getting error on the build of the image on the last part. Since i dont have more time (13/12), i will send it like and try to configure this on the future.
