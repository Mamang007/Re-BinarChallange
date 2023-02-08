const express = require("express");
const app = express();
const port = 3000;

// app.get("/", (req, res) => res.send("Hello World!"));

// app.listen(port, () => console.log(`Example app listening at http//localhost:${port}`));

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

app.listen(port, () => {
  console.log("Server Nyala");
});
