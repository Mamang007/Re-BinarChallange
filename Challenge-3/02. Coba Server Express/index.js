const express = require("express");
const app = express();
const port = 3000;

// Materi Middleware ada di baris 46
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};
app.use(logger);

// //Menjalankan server awal menggunakan express menggunakan app.METHOD() => METHOD yang dipakai = get
// app.get("/", (req, res) => res.send("Hello World!"));

// app.listen(port, () => console.log(`Example app listening at http//localhost:${port}`));
// //Akhir menjalankan server awal

//Materi tentang 'Routing'
//Setiap GET request ke http://localhost:${port} akan diarahkan ke handler ini
app.get("/", (req, res) => {
  res.send("Hello World!");
});

//Setiap GET request ke http://localhost:${port}/products akan diarahkan ke handler ini
app.get("/products", (req, res) => {
  res.json(["Apple", "Redmi", "One Plus One"]);
});

//Setiap GET request ke http://localhost:${port}/orders akan diarahkan ke handler ini
app.get("/orders", (req, res) => {
  res.json([
    {
      id: 1,
      paid: false,
      user_id: 1,
    },
    {
      id: 2,
      paid: false,
      user_id: 1,
    },
  ]);
});
//Akhir materi 'Routing'

// Materi Middleware, function request handler dnegan tambahan parameter next (req, res, next)
/* Macam-macam Middleware:
Application Level Middleware
Built-In Middleware
Route Level Middleware
Third Party Middleware
Error Handling Middleware*/

// //Aplication Level Middleware (Middleware ini akan diletakkan di atas)
// const logger = (req, res, next) => {
//   console.log(`${req.method} ${req.url}`);
//   next();
// };
// app.use(logger);

// //Built-In Middleware
// app.use(express.json()); //Untuk parsing application/json
// app.use(express.urlencoded({ extended: false })); //Untuk parsing x-www-urlencoded

/*Route Level Middleware, membuat file 'router.js' yang
terdiri dari kelompok endpoint-endpoint yang dibuat*/
const router = require("./router");
app.use(router);

app.get("/endpointLain", (req, res) => {
  //endpoint yang dideklarasikan disini, tidak akan menampilkan timelog
  res.send("Halaman ini tidak terdapat ada timeLog");
});

// //Third-Party Middleware, perlu install dahulu di npm (yg akan digunakan adalah Morgan)
const morgan = require("morgan");
app.use(morgan("dev"));

//Error Handling Middleware, memiliki 4 parameter (err, req, res, next)
/*Ada dua error handler
  1. Internal Server Error
  2. 404 Handler*/
//Internal Server Error (status: 5xx)
app.get("/iniError", (req, res) => {
  iniError; // Ini penyebab error karena tidak terdefinisi
});
//Internal Server Error Handler
app.use(function (err, req, res, next) {
  console.error(err);
  res.status(500).json({
    status: "fail",
    errors: err.message,
  });
});
//404 Handler
app.use(function (req, res, next) {
  res.status(404).json({
    status: "fail",
    errors: "Are you lost?",
  });
});

//Menyalakan server menggunakan 'app.listen'
app.listen(port, () => {
  console.log(`Server Nyala on ${port}..`);
});
