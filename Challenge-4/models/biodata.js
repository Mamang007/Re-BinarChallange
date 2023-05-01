"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Biodata extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Biodata.belongsTo(models.Game);
      // Akan menggabungkan "Biodata"."GameId" = "Game"."id", otomatis tergenerate karena sama sama id
    }
  }
  Biodata.init(
    {
      fullname: DataTypes.STRING,
      hobby: DataTypes.STRING,
      GameId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Biodata",
    }
  );
  return Biodata;
};
