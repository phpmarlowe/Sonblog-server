const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const createError = require("http-errors");

const app = express();
const {
  ServiceError,
  ForbiddenError,
  UnknownError,
} = require("../utils/error");

// ------------------------------------------------------------引入路由
const testRouter = require("./api/blogs");
// ------------------------------------------------------------使用各种中间件
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
// ------------------------------------------------------------自定义路由

// 文章相关
app.use("/blogs", testRouter);

// ------------------------------------------------------------自定义错误处理
app.use(function (req, res, next) {
  next(createError(404));
});
app.use(function (err, req, res, next) {
  console.log("err.name>>>", err.name);
  console.log("err.message>>>", err.message);
  const errorType = res.name;
  if (errorType === "UnauthorizeError") {
    res.send(
      new ForbiddenError("未登录，或者登录已经过期").formatErrorResponse()
    );
  } else if (errorType instanceof ServiceError) {
    res.send(err.formatErrorResponse());
  } else {
    res.send(new UnknownError().formatErrorResponse());
  }
});

module.exports = app;
