const express = require("express");
const router = express.Router();
const {
  addBlogsService,
  getBlogsService,
  delBlogsService,
  updateBlogsService,
} = require("../../service/blogsService");

router.get("/", async (req, res, next) => {
  console.log("请求");
  let result = await getBlogsService();
  res.send(result);
});

router.post("/", async (req, res) => {
  console.log(req.body);
  let result = await addBlogsService(req.body);
  console.log("result:", result);
  res.send(result);
});

router.put("/:id", async (req, res) => {
  let result = await updateBlogsService(req.params.id, req.body);
  res.send(result);
});

router.delete("/:id", async (req, res) => {
  let result = await delBlogsService(req.params.id);
  res.send(result);
});
module.exports = router;
