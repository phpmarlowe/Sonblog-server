const express = require("express");
const router = express.Router();

router.get("/api", () => {
  console.log("请求");
});

module.exports = router;
