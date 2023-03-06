const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const expressLayouts = require("express-ejs-layouts"); // Membuat Layout Header-Nav-Footer
const data = require("./database/user.json");

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
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

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
app.post("/register", (req, res) => {
  try {
    userData.push({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    res.redirect("/login");
  } catch {
    res.redirect("/register");
  }
  console.log(data);
});

app.get("/login", (req, res) => {
  res.render("login", {
    layout: "layouts/main-layouts",
    tittle: "Login Page",
  });
});
app.post("/login", (req, res) => {
  let request = req.body;
  let userData = data;
  for (let i = 0; i < userData.length; i++) {
    const element = userData[i];
    if (request.username === element.username && request.password === element.password) {
      res.status(200);
      // res.json(userData);
      res.redirect("/game");
    } else {
      res.status(401);
      res.send("You're not authenticated.");
    }
  }
});

//Error handler
app.use((err, req, res, next) => {
  res.status(500).json({
    status: "fail",
    errors: err.message,
  });
});

app.use((req, res, next) => {
  res.status(404).json({
    status: "fail",
    errors: "Page doesn't exist. Are you lost?",
  });
});

app.listen(port, () => {
  console.log(`Server lintening on ${port}`);
});
