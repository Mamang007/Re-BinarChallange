const express = require("express");
const app = express();
const port = 3000;

const router = require("./router");
app.use(router);

//Memanggil EJS
app.set("view engine", "ejs");

app.get("/greet", (req, res) => {
  const name = req.query.name || "Void";
  res.render("greet", {
    name,
  });
});

app.listen(port, () => {
  console.log(`Server Listening on ${port}...`);
});
