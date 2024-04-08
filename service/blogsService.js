const {
  addBlogsDao,
  getBlogsDao,
  delBlogsDao,
  updateBlogsDao,
} = require("../dao/operate/blogs");

module.exports.addBlogsService = async (blogInfo) => {
  console.log(blogInfo);
  let data = await addBlogsDao(blogInfo);
  return {
    code: 200,
    message: "新增成功",
    data,
  };
};

module.exports.getBlogsService = async () => {
  let data = await getBlogsDao();
  return {
    code: 200,
    message: "查找成功",
    data,
  };
};

module.exports.delBlogsService = async (id) => {
  let data = await delBlogsDao(id);
  return {
    code: 200,
    message: "删除成功",
    data,
  };
};

module.exports.updateBlogsService = async (id, newBlogsInfo) => {
  let data = await updateBlogsDao(id, newBlogsInfo);
  return {
    code: 200,
    message: "修改成功",
    data,
  };
};
