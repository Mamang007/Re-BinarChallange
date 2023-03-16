const express = require("express");
const app = express();
const { Article } = require("./models");

//Handle request dari form
app.use(express.urlencoded({ extended: false }));

//Setting view engine
app.set("view engine", "ejs");

//POST './articles'
app.post("/articles", (req, res) => {
  Article.create({
    title: req.body.title,
    body: req.body.body,
  }).then((article) => {
    res.send("Article berhasil dibuat.");
  });
});

app.get("/articles/create", (req, res) => {
  res.render("articles/create");
});

app.get("/articles", (req, res) => {
  Article.findAll().then((articles) => {
    res.render("articles/index", { Article });
  });
});

app.get("/articles/:id", (req, res) => {
  Article.findOne({
    where: { id: req.params.id },
  }).then((article) => {
    //Karena hasil dari promise findOne adalah Object,
    //Maka bisa kita lempar langsung ke method render
    res.render("articles/show", article);
  });
});

app.listen(3000, () => {
  console.log("Server nyala pada localhost:3000");
});
