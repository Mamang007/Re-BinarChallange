const router = require("express").Router();
const home = require("./controllers/homeController");
const article = require("./controllers/articleController");

router.get("/", home.index);
router.get("/articles", article.index);
router.get("/articles/:id", article.show);
router.get("/articles/new", article.new);
router.post("/articles", article.create);

module.exports = router;
