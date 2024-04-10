const { formatResponse } = require("./tools");
/**
 * 错误处理基类
 */
class ServiceError extends Error {
  constructor(code, message) {
    super(message);
    this.code = code;
  }
  formatErrorResponse() {
    return formatResponse(this.code, this.message, null);
  }
}

exports.ForbiddenError = class extends ServiceError {
  constructor(message = "暂无权限") {
    super(401, message);
  }
};
exports.UploadError = class extends ServiceError {
  constructor(message = "文件上传错误") {
    super(413, message);
  }
};
exports.ValidationError = class extends ServiceError {
  constructor(message = "验证失败") {
    super(406, message);
  }
};
exports.NotFoundError = class extends ServiceError {
  constructor() {
    super(404, "not found");
  }
};
// 未知错误
exports.UnknownError = class extends ServiceError {
  constructor() {
    super(500, "server internal error");
  }
};

module.exports.ServiceError = ServiceError;

// ps.使用方法 throw new YouDefineError(message)
