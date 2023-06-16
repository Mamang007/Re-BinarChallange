const express = require("express");
const routerArticle = require("./router/routerArticle");
const routerUser = require("./router/routerUser");
const app = express();
const swaggerJSON = require("./swagger.json");
const swaggerUI = require("swagger-ui-express");
const port = 8000;

// Set Up
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Homepage
app.get("/", (_, res) => {
  res.send("Hello World!");
});

// Documantation
app.use("/app-docs", swaggerUI.serve, swaggerUI.setup(swaggerJSON));

// Router
app.use(routerArticle);
app.use(routerUser);

app.listen(port, () => {
  console.log(`Server aktif di localhost:${port}`);
});
