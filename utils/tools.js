module.exports.formatResponse = (
  code = 200,
  message = "请求成功",
  data = null
) => {
  return {
    code,
    message,
    data,
  };
};

// 字符串长度校验
module.exports.checkString = (string) => {
  if (
    !string ||
    string.length < 6 ||
    string.includes(" ") ||
    string.length > 10 ||
    !string.includes("abc")
  ) {
    return false;
  }
  return true;
};
