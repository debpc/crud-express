const app = require("./hello");
const status = "servidor rodando em http://localhost:3000";

app.listen(3000, () => console.log(status));
