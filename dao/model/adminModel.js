const { sequelize, DataTypes } = require("../dbConnect");

module.exports = sequelize.define(
  "Admin",
  {
    loginAccount: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    loginPassword: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { freezeTableName: true }
);
