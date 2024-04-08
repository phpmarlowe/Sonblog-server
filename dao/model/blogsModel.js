const { sequelize, DataTypes } = require("../dbConnect");

module.exports = sequelize.define(
  "blogs",
  {
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);
