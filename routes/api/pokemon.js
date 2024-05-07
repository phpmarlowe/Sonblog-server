const express = require("express");
const router = express.Router();

const {
  getPokemonService,
  searchPokemonService,
} = require("../../service/pokemonService");

router.get("/", async (req, res, next) => {
  // 分页参数通过 query 传过来
  const { limit = 10, page = 1 } = req.query;
  console.log(limit, page, "page");
  let result = await getPokemonService({ limit, page });
  console.log(result, "pokemon");
  res.send(result);
});

router.post("/", async (req, res, next) => {
  console.log(req.body);
  const { id, name } = req.body;
  let result = await searchPokemonService({ id, name });
  console.log(result, "pokemon");
  res.send(result);
});

module.exports = router;
