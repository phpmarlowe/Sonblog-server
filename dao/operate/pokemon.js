const { Op } = require("sequelize");
const pokemonModel = require("../model/pokemonModel");

// 主要是查询 pokemon 数据

/**
 *
 * @param {* limit-每页条数 , page-页码} pageInfo
 */
module.exports.getPokemonsDao = async (pageInfo) => {
  const { limit, page } = pageInfo;
  console.log(limit, page, "inDao");
  return await pokemonModel.findAndCountAll({
    limit: limit * 1,
    offset: (page - 1) * limit,
  });
};
/**
 * @param {* id-主键 , name-名称}searchInfo
 */
module.exports.searchPokemonsDao = async (searchInfo) => {
  const { id = "", name = "" } = searchInfo;
  // 用户并不知道id，只知用名称、属性值等进行查询结果可能是多个。
  // 但程序中必须根据具体id查询出具体单个的属性
  let getOne = await pokemonModel.findByPk(id);
  const chain = getOne.dataValues.chain.split(",");
  console.log(chain, "chain");
  let newChain = [];
  chain.forEach((e) => {
    let a = pokemonModel.findByPk(Number(e));
    newChain.push(a);
  });
  await Promise.all(newChain).then((res) => {
    console.log(res, "ress");
    getOne.dataValues.chain_ = res;
  });

  return getOne;
  await pokemonModel.findOne({
    where: {
      [Op.or]: [{ id }, { name }],
    },
  });

  return await pokemonModel.findAll({
    where: {
      id: {
        [Op.or]: [id],
      },
    },
  });
  return;
};
