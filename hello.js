const express = require("express");
const app = express();

const hello = (_, res) => {
  res.send("Hello World!");
};

app.get("/", hello);

module.exports = app;
