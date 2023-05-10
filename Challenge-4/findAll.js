const express = require("express");
const app = express();

app.use(express.json());

//Memanggil Router Game.js
const games = require("./routes/game");
app.use(games);

const { Game, Biodata, History } = require("./models");

app.get("/game", async (_, res) => {
  const data = await Game.findAll({
    include: [Biodata, History],
  });
  res.json(data);
});
// app.get("/bio", async (_, res) => {
//   const data = await Biodata.findAll({});
//   res.json(data);
// });
// app.get("/history", async (_, res) => {
//   const data = await History.findAll({});
//   res.json(data);
// });

// Nyalakan server 'nodemon findAll.js'
app.listen(3030, () => {
  console.log("Server Aktif di port 3030");
});
