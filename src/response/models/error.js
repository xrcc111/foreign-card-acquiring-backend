class ErrorModel {
  constructor(code = 500, msg = 'Unknown server error', statusCode = 500) {
    this.code = code // data携带的内部异常状态码
    this.msg = msg // 消息
    this.statusCode = statusCode // 外层的状态码
  }
  throwErr(ctx) {
    // 抛出错误
    ctx.throw(this.statusCode, this.msg, {
      code: this.code,
      flag: 'ErrorModel',
    })
  }
}
// 400参数错误
class ParameterError extends ErrorModel {
  constructor(code, msg = 'Request error') {
    super(code, msg, 400)
  }
}
// 401错误
class AuthError extends ErrorModel {
  constructor(code, msg = '401') {
    super(code, msg, 401)
  }
}
// 404
class NotFoundError extends ErrorModel {
  constructor(code, msg = '404') {
    super(code, msg, 404)
  }
}
// 500
class InternalServerError extends ErrorModel {
  constructor(code, msg = 'Server internal error') {
    super(code, msg, 500)
  }
}

module.exports = {
  ErrorModel,
  ParameterError,
  AuthError,
  NotFoundError,
  InternalServerError,
}