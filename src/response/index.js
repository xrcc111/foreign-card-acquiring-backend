const SuccessModel = require('./models/success')
const {
  ParameterError,
  AuthError,
  NotFoundError,
  InternalServerError,
} = require('./models/error')

const SUCCESS = async (ctx, data, msg) => new SuccessModel(200, msg, data).success(ctx)
const PARAMS_ERROR = async (ctx, msg = 'parameter error') => new ParameterError(1001, msg).throwErr(ctx)
const NotFound = async ctx => new NotFoundError(404, 'Path error').throwErr(ctx)
const FAIL = async (ctx, msg) => new InternalServerError(500, msg).throwErr(ctx)
const TOKEN_EXPIRED = async (ctx) => new AuthError(4001, 'Login expired').throwErr(ctx)

module.exports = {
  SUCCESS,
  PARAMS_ERROR,
  NotFound,
  FAIL,
  TOKEN_EXPIRED
}