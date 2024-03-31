require("dotenv").config();
// 引入数据库连接
require("./dao/sync");

const app = require("./routes/index");

module.exports = app;
