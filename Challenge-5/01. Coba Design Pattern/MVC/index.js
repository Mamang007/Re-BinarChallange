const express = require("express");
const app = express();
const port = 3001;

//Memasang middleware basic express
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("view engine", "ejs");

//Import router dan pasang router
const router = require("./router");
app.use(router);

app.get("/", (_, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server aktif di port ${port}`);
});
