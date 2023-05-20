const { User } = require("../models");
const passport = require("../lib/passport");
const user = require("../models/user");

function format(user) {
  const { id, username } = user;
  return {
    id,
    username,
    accessToken: user.generateToken(),
  };
}

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
  loginJwt: (req, res) => {
    User.authenticate(req.body).then((user) => {
      res.json(format(user));
    });
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
};
