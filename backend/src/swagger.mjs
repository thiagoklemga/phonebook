import swaggerAutogen from "swagger-autogen";

const doc = {
  info: {
    title: "My API",
    description: "Description",
  },
  host: "localhost:8080",
};

const outputFile = "./swagger-output.json";
const routes = ["./routes/contactsRoutes.ts"];

swaggerAutogen()(outputFile, routes, doc);
