/* SETUP */
const express = require("express");
const app = express();

const production = "production" === process.env.NODE_ENV;
const port = process.env.PORT || 3000;

const morgan = require("morgan");
if (!production) {
  app.use(morgan("dev"));
}

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/* ROUTING */
const productRoutes = require("./src/routes/products");
app.use("/", mainRoutes);

app.listen(port, startListening);

function startListening() {
  if (!production) {
    console.log("Server available on http://localhost:" + port);
  }
}
