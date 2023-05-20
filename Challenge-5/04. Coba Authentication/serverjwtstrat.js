const express = require("express");
const app = express();
const session = require("express-session");
const flash = require("express-flash");
const passport = require("./lib/passport");
const port = 8001;

//Set request body parser
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());

app.get("/", (_, res) => res.send("Hello ini JWT Strategy"));

//Set session handler
app.use(
  session({
    secret: "Buat ini jadi rahasia",
    resave: false,
    saveUninitialized: false,
  })
);

//Set flash
app.use(flash());

//Set view engine
app.set("view engine", "ejs");

//Set router
const router = require("./routerjwt");
app.use(router);

app.listen(port, () => {
  console.log(`Server nyala di port ${port}`);
});
