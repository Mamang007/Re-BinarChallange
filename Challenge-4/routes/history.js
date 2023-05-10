const router = require("express").Router();

const { History } = require("../models");

router.get("/histories", async (_, res) => {
  const loginData = {
    id: 1,
    username: "Si Madun",
    password: "123",
  };

  const historyData = await History.findAll({
    // where: {
    //   GameId: loginData.id,
    // },
    // // Menampilkan hanya id sesuai 'loginData'
  });

  res.render("histories", {
    title: "Dashboard History",
    histories: historyData,
  });
});

//Menambahkan DATA
router.get("/history/add", async (_, res) => {
  res.render("add-history", {
    title: "Add History",
  });
});

router.post("/history/post", async (req, res) => {
  const history = await History.create({
    GameId: req.body.GameId,
    playedAt: Date.now(),
    score: req.body.score,
  });

  res.redirect("/histories");
});

//Update DATA
router.get("/history/update/:id", async (req, res) => {
  const historyData = await History.findByPk(req.params.id);

  res.render("update-history", {
    title: "Update History",
    history: historyData,
  });
});

router.post("/history/update/:id", async (req, res) => {
  await History.update(
    {
      GameId: req.body.GameId,
      playedAt: Date.now(),
      score: req.body.score,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );

  res.redirect("/histories");
});

// Hapus DATA
router.get("/history/delete/:id", async (req, res) => {
  await History.destroy({
    where: {
      id: req.params.id,
    },
  });

  res.redirect("/histories");
});

module.exports = router;
