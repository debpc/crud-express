const express = require("express");
const app = express();

const hello = (_, res) => {
  res.send("Helo World!");
};

app.get("/", hello);

const status = "servidor rodando em http://localhost:3000";

app.listen(3000, () => console.log(status));
