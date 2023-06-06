const { User } = require("../models");
const passport = require("../lib/passport");
const user = require("../models/user");
const jwt = require("jsonwebtoken");

module.exports = {
  register: (req, res, next) => {
    // Panggil static method register
    User.register(req.body)
      .then(() => {
        res.redirect("/login");
      })
      .catch((err) => next(err));
  },
  login: passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true, //Untuk mengaktifkan express flash
  }),
  loginJwt: async (req, res) => {
    try {
      const pengguna = await User.authenticate({
        username: req.body.username,
        password: req.body.password,
      });

      const { id, username, password } = pengguna;

      res.json({
        id,
        username,
        password,
        accessToken: user.generateToken(),
      });
    } catch (err) {
      console.log(err);
    }
  },
  whoami: (req, res) => {
    /* req.user adalah instance dari User Model,
    hasil autentikasi dari passport */
    res.render("profile", req.user.dataValues);
  },
  whoamiJwt: (req, res) => {
    const currentUser = req.user;
    res.json(currentUser);
  },
  getData: async (_, res) => {
    const users = await User.findAll();
    res.json(users);
  },
};
