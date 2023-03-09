class SuccessModel {
  constructor(code, msg, data) {
    this.code = code || 200
    this.msg = msg || 'success'
    if (data) {
      this.data = data
    }
  }
  success(ctx) {
    // 所有的响应都是json，koa处理好的方式，直接用
    ctx.body = this
  }
}

module.exports = SuccessModel