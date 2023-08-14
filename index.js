const express = require("express");
const crypto = require("crypto");

const app = express();

app.use(express.json());

const db = [];
const procuraId = (req, res, next) => {
  const id = req.params.id;

  req.index = db.findIndex((item) => item.id === id);

  if (req.index == -1) {
    return res.status(404).json({ error: "item not found." });
  }

  next();
};

// Lista todos
app.get("/api", (_, res) => {
  res.json(db);
});

// Create
app.post("/api", (req, res) => {
  const id = crypto.randomUUID();
  db.push({ id, ...req.body });
  res.status(201).json({ id });
});

// Read
app.get("/api/:id", procuraId, (req, res) => {
  res.json(db[req.index]);
});

// Update
app.put("/api/:id", procuraId, (req, res) => {
  db[req.index] = { ...db[req.index], ...req.body };
  res.json(db[req.index]);
});

// Delete
app.delete("/api/:id", procuraId, (req, res) => {
  db.splice(req.index, 1);
  res.sendStatus(204);
});

// Menssagem de status servidor
const status = "Servidor rodando em http://localhost:3000";

//iniciar o Servidor
app.listen(3000, () => console.log(status));

// Execute a aplicação Api Rest
