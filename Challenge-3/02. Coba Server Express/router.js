const express = require("express");
const router = express.Router();

/*Endpoint yang dibuat disini akan menampilkan timeLog
dengan dengan syntax 'router.use'.
Tetapi endpoint yang tidak dideklarasikan sama sekali akan diarahkan ke 'router.js'*/
router.use(function timeLog(req, res, next) {
  console.log("Time: ", Date.now());
  next();
});

//Ini endpoint yg dideklarasikan di 'router.js'
router.get("/route1", (req, res) => {
  res.send("Birds home page, tulisan ini dideklarasikan di 'router.js'");
});
//Ini endpoint yg dideklarasikan di 'router.js'
router.get("/aboutroute", (req, res) => {
  res.send("About router, tulisan ini dideklaraskan di 'router.js'");
});

module.exports = router;
