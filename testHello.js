const teste = require("supertest");
const app = require("./hello");

teste(app)
  .get("/")
  .expect(200)
  .expect("Hello World!")
  .end((error) => {
    if (error) console.log(error.message);
  });
