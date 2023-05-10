const router = require("express").Router();
const article = require("./article");
const resourceLain = require("./resourceLain1");

router.use("/articles", article);
router.use("/resourceLains", resourceLain);

module.exports = router;
