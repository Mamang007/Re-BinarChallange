const express = require("express");
const app = express();
const port = 3000;
const expressLayouts = require("express-ejs-layouts"); // Membuat Layout Header-Nav-Footer

// Memanggil Router Middleware
const router = require("./router");
app.use(router);
app.use(expressLayouts); // Setup package express layouts

// Memanggil EJS
app.set("view engine", "ejs");

// Menampilkan greeting by query,
// Cth: 'localhost:3000/greet?name=Mamang'
app.get("/greet", (req, res) => {
  const name = req.query.name || "Void";
  res.render("greet", {
    name,
  });
});

// Membuat Halaman yang menampilkan user terdaftar di Server
const users = [];
//Membuat function untuk menampilkan users *belum bisa

app.use(express.urlencoded({ extended: false })); // Penting untuk nge-parse form dari halaman register
// Halaman Server untuk menampilkan jumlah user
app.get("/database", (req, res) => {
  res.render("database", {
    layout: "layouts/main-layouts", // Mengirim layout ke halaman
    tittle: "Database", // Mengirim tittle ke layout
    users,
  });
});
// Halaman register user baru
app.get("/register", (req, res) => {
  res.render("register", {
    layout: "layouts/main-layouts",
    tittle: "Register",
  });
});
// Melakukan POST user baru pada halaman registrasi
app.post("/register", (req, res) => {
  const { email, password } = req.body;

  users.push({ email, password });
  //Redirect ke homepage
  res.redirect("/database");
  console.log(users);
});

app.listen(port, () => {
  console.log(`Server Listening on ${port}...`);
});
