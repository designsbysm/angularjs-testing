require("dotenv").config();

const express = require("express");
const routes = require("./routes");

const app = express();
const environment = process.env.SERVER_ENV;
const port = process.env.SERVER_PORT;

app.use(express.json());
app.use(routes);

app.listen(port, () =>
  console.info("%s server listening on %s", environment, port)
);

module.exports = app;
