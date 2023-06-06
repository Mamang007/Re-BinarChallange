const router = require("express").Router();
const passport = require("passport");
const auth = require("./controllers/authController");
const restrict = require("./middleware/restrict");
const user = require("./models/user");

// Middleware
router.get("/", restrict, (req, res) => res.render("index"));

// // HomePage, Jika tanpa middleware maka akan dapat ditampilkan
// router.get("/", (_, res) => res.render("index"));

//Register
router.get("/register", (_, res) => res.render("register"));
router.post("/register", auth.register);

//Login
router.get("/login", (_, res) => res.render("login"));
router.post("/login", auth.login);

// Whoami
router.get("/whoami", restrict, auth.whoami);

module.exports = router;
