const router = require("express").Router();
const passport = require("passport");
const user = require("./models/user");
const auth = require("./controllers/authController");

// Middlewares
const restrict = require("./middleware/restrict");

// Register
router.get("/api/v1/auth/register", (_, res) => res.render("register"));
router.post("/api/v1/auth/register", auth.register);

// Login
router.get("/api/v1/auth/login", (_, res) => res.render("login"));
router.post("/api/v1/auth/login", auth.loginJwt);

// Whoami
router.get("/api/v1/auth/whoami", restrict, auth.whoamiJwt);

module.exports = router;
