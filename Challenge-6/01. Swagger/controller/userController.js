const { User } = require("../models");
const user = require("../models/user");

module.exports = {
  createUser: async (req, res) => {
    const { nama, email } = req.body;
    const nim = Math.floor(Math.random() * 100000 + 1);

    await User.create({
      nama,
      nim,
      email,
    }).then((user) => {
      res.send("Artikel berhasil dibuat!");
    });
  },
  getUser: async (req, res) => {
    const users = await User.findAll();
    res.json(users);
  },
  getUserOne: async (req, res) => {
    const users = await User.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.json(users);
  },
  updateUser: async (req, res) => {
    const { nama, nim, email } = req.body;

    const users = await User.update(
      {
        nama,
        nim,
        email,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    ).then((user) => {
      res.send("Artikel berhasil diperbarui!");
    });
  },
  deleteUser: async (req, res) => {
    User.destroy({
      where: {
        id: req.params.id,
      },
    }).then((user) => {
      res.send("Artikel berkasil dihapus!");
    });
  },
};
