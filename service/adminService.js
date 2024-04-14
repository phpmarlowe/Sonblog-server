const jwt = require("jsonwebtoken");
const { loginDao, registerDao } = require("../dao/operate/admin");
const { ValidationError } = require("../utils/error");
const { formatResponse, checkString } = require("../utils/tools");

let expiresIn = 24 * 60 * 60; // 默认一天有效期
module.exports.loginService = async (loginInfo) => {
  //登录只是为了拿 token , loginDao 只是查询有无此账号
  let data = await loginDao(loginInfo);
  if (!data) {
    return new ValidationError("查无此人").formatErrorResponse();
  } else {
    console.log(data.dataValues);
    const {
      dataValues: { id, loginAccount, loginPassword },
    } = data;
    data = { id, loginAccount, loginPassword };
    const token = jwt.sign(data, "xxx", { expiresIn });

    return formatResponse(200, "登录成功", { ...data, token });
  }
};

module.exports.registerService = async (registerInfo) => {
  // 首先检查格式避免不必要的异步等待
  const passValid = checkString(registerInfo?.loginPassword);
  if (!passValid)
    return new ValidationError(
      "密码格式不对，具体格式要求请联系管理员"
    ).formatErrorResponse();

  const hasAccount = await loginDao(registerInfo);
  if (hasAccount) {
    return new ValidationError(
      "不能重复注册，请直接登录"
    ).formatErrorResponse();
  } else {
    await registerDao(registerInfo);
    return formatResponse(200, "注册成功"); //后续优化下响应结果的抛出方式：res.success(message)
  }
};
