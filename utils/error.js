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
    super(message, 401);
  }
};
exports.UploadError = class extends ServiceError {
  constructor(message = "文件上传错误") {
    super(message, 413);
  }
};
exports.ValidationError = class extends ServiceError {
  constructor(message = "验证失败") {
    super(message, 406);
  }
};
exports.NotFoundError = class extends ServiceError {
  constructor() {
    super("not found", 404);
  }
};
// 未知错误
exports.UnknownError = class extends ServiceError {
  constructor() {
    super("server internal error", 500);
  }
};

module.exports.ServiceError = ServiceError;

// ps.使用方法 throw new YouDefineError(message)
