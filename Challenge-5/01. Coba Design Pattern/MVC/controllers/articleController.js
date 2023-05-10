// controllers/articleController.js
const { Article } = require("../models");

module.exports = {
  //View Controller
  index: (req, res) => {
    Article.findAll().then((articles) => {
      res.render("articles/index", { articles });
    });
  },

  show: (req, res) => {
    Article.findOne({
      where: { id: +req.params.id },
    })
      .then((article) => {
        res.render("articles/show", {
          id: article.id,
          title: article.title,
          body: article.body,
        });
      })
      .catch((err) => res.status(404).send("Tidak dapat menemukan artikel"));
  },

  new: (req, res) => {
    res.render("articles/create");
  },

  //Logical Controller
  create: (req, res) => {
    //Mengambil properti title dan body dari request
    const { title, body } = req.body;
    Article.create({ title, body })
      .then((article) => {
        res.redirect(`/articles/${article.id}`);
      })
      .catch((err) => {
        res.send(`Gagal membuat artikel, karena ${JSON.stringify(err.message, null, 2)}`);
      });
  },
};
