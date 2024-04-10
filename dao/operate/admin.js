const adminModel = require("../model/adminModel");

module.exports.loginDao = async ({ loginAccount, loginPassword }) => {
  //
  return adminModel.findOne({
    where: {
      loginAccount,
      loginPassword,
    },
  });
};
module.exports.registerDao = async (registerInfo) => {
  //
  console.log("reg");
  const dataValues = adminModel.create(registerInfo);
  return dataValues;
};
