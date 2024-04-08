const blogsModel = require("../model/blogsModel");

// 导出一 些方法用来操作数据库

module.exports.addBlogsDao = async (blogsInfo) => {
  const { dataValues } = await blogsModel.create(blogsInfo);
  return dataValues;
};

module.exports.getBlogsDao = async () => {
  const res = await blogsModel.findAll();
  console.log(res);
  return res;
};

module.exports.delBlogsDao = async (id) => {
  const res = await blogsModel.destroy({
    where: {
      id,
    },
  });
  return res;
};
module.exports.updateBlogsDao = async (id, newBlogsInfo) => {
  await blogsModel.update(newBlogsInfo, {
    where: {
      id,
    },
  });
  return await blogsModel.findByPk(id);
};
