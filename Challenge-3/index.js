const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const expressLayouts = require("express-ejs-layouts"); // Membuat Layout Header-Nav-Footer

// Setup package express layouts
app.use(expressLayouts);

// Memanggil EJS & Public file
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

//Aplication Level Middleware
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};
app.use(logger);

app.get("/", (req, res) => {
  res.render("index", {
    layout: "layouts/main-layouts",
    tittle: "Landing Page",
  });
});

app.get("/game", (req, res) => {
  res.render("game", {
    layout: "layouts/main-layouts",
    tittle: "Game Page",
  });
});

app.get("/register", (req, res) => {
  res.render("register", {
    layout: "layouts/main-layouts",
    tittle: "Register Page",
  });
});
app.get("/login", (req, res) => {
  res.render("login", {
    layout: "layouts/main-layouts",
    tittle: "Login Page",
  });
});

app.listen(port, () => {
  console.log(`Server lintening on ${port}`);
});
