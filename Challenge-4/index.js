const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

//Middleware
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

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
