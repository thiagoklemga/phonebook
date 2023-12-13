import express from "express";
import bodyParser from "body-parser";
import routes from "./routes/contactsRoutes";

const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/api", routes); // Specify a base path for your routes

// app.use((err, _request, response, _next) => {
//   if (err) {
//     return response
//       .status(err.statusCode)
//       .json({ status: err.name, message: err.message });
//   }
//   console.log(err);
//   return response
//     .status(403)
//     .json({ status: "error", message: "Internal server error" });
// });

//Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
