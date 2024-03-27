const express = require("express");
const app = express();
const logger = require("./logger");
const authorize = require("./authorize");

app.use([logger, authorize]);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/about", (req, res) => {
  res.send("Hello about");
});

app.get("/api/products", (req, res) => {
  res.send("Hello products");
});

app.get("/api/categories", (req, res) => {
  console.log(req.user);
  res.send("Hello categories");
});

app.listen(5000, () => {
  console.log("user hit the server");
});
