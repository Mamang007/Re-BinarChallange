const express = require("express");
const app = express();
const session = require("express-session");
const flash = require("express-flash");
const port = 8000;

//Set request body parser
app.use(express.urlencoded({ extended: false }));

//Set session handler
app.use(
  session({
    secret: "Buat ini jadi rahasia",
    resave: false,
    saveUninitialized: false,
  })
);

//Set Passport
const passport = require("./lib/passport");
app.use(passport.initialize());
app.use(passport.session());

//Set flash
app.use(flash());

//Set view engine
app.set("view engine", "ejs");

//Set router
const router = require("./router");
app.use(router);

app.listen(port, () => {
  console.log(`Server nyala di port ${port}`);
});
