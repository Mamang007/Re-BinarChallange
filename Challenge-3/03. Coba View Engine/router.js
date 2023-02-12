const express = require("express");
const app = express();
const router = express.Router();

router.use(function timeLog(req, res, next) {
  console.log(`${req.method} ${req.url}`);
  console.log("Time: ", Date.now());
  next();
});

router.get("/", (req, res) => {
  /*Untuk mengirim respon berupa file 'index.ejs'
    pada folder 'views' menggunakan .render*/
  res.render("index");
});

module.exports = router;
