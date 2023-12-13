import express from "express";
import bodyParser from "body-parser";
import routes from "./routes/contactsRoutes";

export const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/contacts", routes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
