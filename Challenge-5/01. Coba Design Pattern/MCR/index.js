const express = require("express");
const app = express();
const port = 3001;

//Import router dan pasang router
const router = require("./router");
app.use(router);

app.get("/", (_, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server aktif di port ${port}`);
});
