const { Sequelize, DataTypes } = require("sequelize");

const { DB_NAME, DB_USER, DB_PWD, DB_HOST } = process.env;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PWD, {
  host: DB_HOST,
  dialect: "mysql",
  logging: false,
});

// (async function () {
//   try {
//     await sequelize.authenticate();
//     console.log("Connection has been established successfully.");
//   } catch (error) {
//     console.error("Unable to connect to the database:", error);
//   }
// })();
module.exports = { sequelize, DataTypes };
