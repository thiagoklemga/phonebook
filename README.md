## Getting Started

- First, its important to understand that the repo contains the both 'repos' for the backend and for the frontend.

- Second, you will need npm version over 10 and node over 20.

So, go to the backend folder and run to install and then to run the api on port 8080:

```bash
npm install
npm run dev
```

Then, you must go to the frontend file and run the same commands:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the Phone Book.

## About the project

Backend:

- Typescript
- Node.js
- Express
- Jest and superjest
- Nodemon

Frontend:

- Typescript
- React.js
- NextJS
- Axios (I think it's great to use with Next on client side data data fetch)
- Tailwind
- Shadcn/ui

## On matter of tests

Important: To run the tests, i suggest to stop the backend on port 8080 cause the integration tests are using the port.

I've created tests only for the backend, covering 100% of all my code. Using unit tests for the controllers and services, and integration tests for the routes.
