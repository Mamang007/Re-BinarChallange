"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class History extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // History.belongsTo(models.Game);
      // Akan menggabungkan "History"."GameId" = "Game"."id", otomatis tergenerate karena sama sama id
    }
  }
  History.init(
    {
      playedAt: DataTypes.DATE,
      score: DataTypes.INTEGER,
      GameId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "History",
    }
  );
  return History;
};
