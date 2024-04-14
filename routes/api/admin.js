const express = require("express");
const router = express.Router();
const { loginService, registerService } = require("../../service/adminService");
const { formatResponse } = require("../../utils/tools");

router.post("/login", async (req, res) => {
  console.log("登录");

  const result = await loginService(req.body);
  res.send(result);
});

router.post("/register", async (req, res) => {
  console.log(req.Authorization);
  const result = await registerService(req.body);
  res.send(result);
  console.log("注册");
});
module.exports = router;
