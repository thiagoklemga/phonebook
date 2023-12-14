import express from "express";
import bodyParser from "body-parser";
import routes from "./routes/contactsRoutes";
import swaggerUi from "swagger-ui-express";
import swaggerFile from "./swagger-output.json";

export const app = express();
const port = 8080;

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(routes);

app.listen(port);
