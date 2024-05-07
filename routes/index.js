const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const createError = require("http-errors");
const { expressjwt: jwt } = require("express-jwt");
const app = express();

const {
  ServiceError,
  ForbiddenError,
  UnknownError,
} = require("../utils/error");
const whiteList = require("./whiteList");
// ------------------------------------------------------------引入路由
const blogsRouter = require("./api/blogs");
const adminRouter = require("./api/admin");
const pokemonRouter = require("./api/pokemon");
// ------------------------------------------------------------使用各种中间件
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(
  jwt({
    secret: "xxx",
    algorithms: ["HS256"],
  }).unless({
    path: whiteList,
  })
);
// ------------------------------------------------------------自定义路由
app.use("/blogs", blogsRouter);
app.use("/admin", adminRouter);
app.use("/pokemon", pokemonRouter);
// ------------------------------------------------------------自定义错误处理
app.use(function (req, res, next) {
  next(createError(404));
});
app.use(function (err, req, res, next) {
  console.log("err.name>>>", err.name);
  console.log("err.message>>>", err.message);
  const errorType = err.name;
  if (errorType === "UnauthorizedError") {
    console.log(1);
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
