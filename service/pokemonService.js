const { getPokemonsDao, searchPokemonsDao } = require("../dao/operate/pokemon");

module.exports.getPokemonService = async (pageInfo) => {
  //
  let result = await getPokemonsDao(pageInfo);

  return {
    code: 200,
    data: {
      total: result.count,
      currentPage: pageInfo.page,
      pageSize: pageInfo.limit,
      data: result.rows,
    },
  };
};

module.exports.searchPokemonService = async (searchInfo) => {
  //
  let database = await searchPokemonsDao(searchInfo);

  return {
    code: 200,
    data: database,
  };
};
