const jwt = require("jsonwebtoken");
const { loginDao, registerDao } = require("../dao/operate/admin");
const { ValidationError } = require("../utils/error");
const { formatResponse, checkString } = require("../utils/tools");

module.exports.loginService = (loginInfo) => {
  //登录只是为了拿 token , loginDao 只是查询有无此账号
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
