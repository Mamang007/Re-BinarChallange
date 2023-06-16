const express = require("express");
const articleCont = require("../controller/articleController");
const router = express.Router();
const Article = require("../models/article");

router.get("/article", articleCont.getArticle);
router.get("/article/:id", articleCont.getArticleOne);
router.post("/article", articleCont.createArticle);
router.put("/article/:id", articleCont.updateArticle);
router.delete("/article/:id", articleCont.deleteArticle);

module.exports = router;
