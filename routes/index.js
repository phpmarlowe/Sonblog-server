const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const app = express();
// ------------------------------------------------------------引入路由
const testRouter = require("./api/test");
// ------------------------------------------------------------使用各种中间件
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
// ------------------------------------------------------------自定义路由

app.use("/api", testRouter);

// ------------------------------------------------------------自定义错误处理
app.use(function (req, res, next) {
  next(createError(404));
});
app.use(function (err, req, res, next) {
  console.log("err.name>>>", err.name);
  console.log("err.message>>>", err.message);
  res.send({
    code: 404,
    msg: "ssss",
    data: "data",
  });
});

module.exports = app;
