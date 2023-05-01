const express = require("express");
const router = express.Router();

const { Game } = require("../models");

router.get("/", async (_, res) => {
  res.json(await Game.findAll());
});

router.post("/", async (req, res) => {
  const game = await Game.create({
    username: req.body.username,
    password: req.body.password,
  });

  res.status(201).json(game);
});

router.put("/", async (req, res) => {
  const game = await Game.update(
    {
      username: req.body.username,
      password: req.body.password,
    },
    {
      where: {
        id: req.body.id,
        //Untuk mengubah menggunakan id by input 'req.body'

        /*Untuk mengubah berdasarkan end point 'game/:id'
        menggunakan 'id: req.param', id diketikkan pada end point*/
      },
    }
  );

  res.json(game);
});

router.delete("/", async (req, res) => {
  const game = await Game.destroy({
    where: {
      id: req.body.id,
    },
  });

  res.json(game);
});

module.exports = router;
