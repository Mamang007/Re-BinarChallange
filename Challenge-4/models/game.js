"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Game.hasOne(models.Biodata);
      // Kolom dengan nama GameId pada Biodata dan History akan otomatis connect
      // Jika menggunakan nama lain, perlu ditambahkan pada foreign key dengan Game.id sebagai parent key
      /* Ex:
        Game.hasOne(models.Biodata, 
          foreignKey: game_id,);*/
      // Game.id akan connect dengan colom game_id

      Game.hasMany(models.History);
    }
  }
  Game.init(
    {
      username: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Game",
    }
  );
  return Game;
};
