require("dotenv").config();
const createError = require("http-errors");

const app = require("./routes/index");

module.exports = app;
