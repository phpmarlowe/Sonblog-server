const express = require("express");
const router = express.Router();
const { loginService, registerService } = require("../../service/adminService");
const { formatResponse } = require("../../utils/tools");

router.post("/login", async () => {
  console.log("登录");
});

router.post("/register", async (req, res) => {
  const result = await registerService(req.body);
  res.send(result);
  console.log("注册");
});
module.exports = router;
