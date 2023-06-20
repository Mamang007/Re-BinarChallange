const { Article } = require("../models");
const article = require("../models/article");

module.exports = {
  createArticle: async (req, res) => {
    const { title, body, approved } = req.body;

    await Article.create({
      title,
      body,
      approved,
    }).then((article) => {
      res.send("Artikel berhasil dibuat!");
    });
  },
  getArticle: async (req, res) => {
    const articles = await Article.findAll();
    res.json(articles);
  },
  getArticleOne: async (req, res) => {
    const articles = await Article.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.json(articles);
  },
  updateArticle: async (req, res) => {
    const { title, body, approved } = req.body;

    const articles = await Article.update(
      {
        title,
        body,
        approved,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    ).then((article) => {
      res.send("Artikel berhasil diperbarui!");
    });
  },
  deleteArticle: async (req, res) => {
    Article.destroy({
      where: {
        id: req.params.id,
      },
    }).then((article) => {
      res.send("Artikel berkasil dihapus!");
    });
  },
};
