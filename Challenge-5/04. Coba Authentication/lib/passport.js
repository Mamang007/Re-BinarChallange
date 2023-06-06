const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const { User } = require("../models");

// Fungsi untuk authentication
async function authenticate(username, password, done) {
  try {
    // Memanggil method yang sudah di buat pada 'models/user.js'
    const user = await User.authenticate({ username, password });
    /* 'done' adalah callback, parameter pertamanya adalah error,
        jika tidak ada error, maka kita beri null saja.
        Parameter keduanya adalah data yang nantinya dapat
        kita akses di dalam req.user */
    return done(null, user);
  } catch (err) {
    // Parameter ketiga akan dilempar ke dalam flash
    return done(null, false, { message: err.message });
  }
}

// Local Strategy
passport.use(new LocalStrategy({ usernameField: "username", passwordField: "password" }, authenticate));

/* Serialize dan Deserialize
    Cara untuk membuat sesi dan menghapus sesi
*/
passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser(async (id, done) => done(null, await User.findByPk(id)));

// Export karena akan digunakan sebagai middleware
module.exports = passport;
