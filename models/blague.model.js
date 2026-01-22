const { DataTypes } = require("sequelize");
const sequelize = require("../database/sequelize");

const Blague = sequelize.define("Blague", {
  question: {
    type: DataTypes.STRING,
    allowNull: false
  },
  answer: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Blague;
