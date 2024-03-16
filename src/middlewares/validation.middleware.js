/**
 * 中间件
 * 验证用户名、密码是否符合规范
 */
const {
  USER_NAME_NONE_ERROR,
  USER_NAME_LENGTH_ERROR,
  USER_NAME_CHAR_ERROR,
  USER_PASSWORD_NONE_ERROR,
  USER_PASSWORD_LENGTH_ERROR,
  USER_PASSWORD_CHAR_ERROR,
  USER_TOKEN_ERROR
} = require("../utils/bodycode")
const validator = require('../utils/validator')
const { verifyToken } = require("../utils/token")


/**
 * 用户名合法性验证中间件
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */
async function validateUsername(ctx, next) {
  const { username } = ctx.request.body;

  // 非空验证
  if (!username) {
      return ctx.body = USER_NAME_NONE_ERROR()
  }

  // 长度验证
  if ((username.length < 6) || (username.length > 16)) {
    return ctx.body = USER_NAME_LENGTH_ERROR()
  }

  // 正则验证
  if (!validator.isValidUsername(username)) {
      return ctx.body = USER_NAME_CHAR_ERROR()
  }
  await next();
}

/**
 * 密码合法性验证中间件
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */
async function validatePassword(ctx, next) {
  const { password } = ctx.request.body;

  // 非空验证
  if (!password) {
    return ctx.body = USER_PASSWORD_NONE_ERROR()
  }

  // 长度验证
  if ((password.length < 8) || (password.length > 18)) {
    return ctx.body = USER_PASSWORD_LENGTH_ERROR()
  }

  // 正则验证
  if (!validator.isValidPassword(password)) {
    return ctx.body = USER_PASSWORD_CHAR_ERROR()
  }
  await next();
}

/**
 * token合法性验证中间件
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */
async function validateToken(ctx, next) {
  const token = ctx.session.token
  
  try {
    const result = verifyToken(token)
    ctx.token = result
    return await next()
  } catch (error) {
    return ctx.body = USER_TOKEN_ERROR(error.message)
  }
}

module.exports = {
  validateUsername,
  validatePassword,
  validateToken
};
