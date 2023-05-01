const express = require("express");
const app = express();
const path = require("path");
const port = 3000;
const data = require("./db/database.json");

//Middleware
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};
// const bodyParser = require("body-parser");
// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }));
// // parse application/json
// app.use(bodyParser.json());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Memanggil Router Game.js
const games = require("./routes/game");
const histories = require("./routes/history");
app.use(games);
app.use(histories);

//Static files
app.use(express.static("public"));
app.use("./css", express.static(__dirname + "public/css"));
app.use("./image", express.static(__dirname + "public/image"));
app.use("./js", express.static(__dirname + "public/js"));
app.use(logger);

//Set views
app.set("views", "./views");
app.set("view engine", "ejs");

//Page EJS
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/admin", (req, res) => {
  res.render("dashboard", {
    title: "Dashboard",
  });
});

app.get("/login", (req, res) => {
  res.render("login", {
    title: "Admin - Login",
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
      res.redirect("/admin");
    } else {
      res.status(401);
      res.send("You're not authenticated.");
    }
  }
});

app.get("/register", (req, res) => {
  res.render("register", {
    title: "Admin - Register",
  });
});

app.post("/register", (req, res) => {
  const { username, email, password, confirmPassword } = req.body;
  try {
    data.push({
      username: username,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    });
    res.redirect("/login");
  } catch {
    res.redirect("/register");
  }
  console.log(data);
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
    errors: "Page doesn't exist. Please double-check your URL.",
  });
});

// Listen on port ${port}
app.listen(port, () => {
  console.log(`Server aktif. Alamat http://localhost:${port}`);
});
