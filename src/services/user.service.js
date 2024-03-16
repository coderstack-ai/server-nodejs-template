const userDAL = require('../dal/user.dal');
const {
  hashPassword,
  verifyPassword
} = require("../utils/crypto")

const { generateToken } = require("../utils/token")

/**
 * 用户信息进行注册
 * @param {*} username 
 * @param {*} password 
 * @returns 
 */
async function createUser(username, password) {
  // 检查用户名是否存在
  const user = await userDAL.findUserByUsername(username)
  if (user) {
    throw new Error ('用户名已存在')
  }

  // 密码加密
  const { salt, hash } = hashPassword(password)

  // 存储
  return await userDAL.createUser(username, salt, hash)
}

/**
 * 用户信息进行登录
 * @param {*} username 
 * @param {*} password 
 * @returns 
 */
async function loginUser(username, password) {
  // 检查用户名是否存在
  const user = await userDAL.findUserByUsername(username)
  if (!user) {
    throw new Error ('用户名不存在');
  }

  // 验证密码是否匹配
  const isPasswordMatch = verifyPassword(password, user.password, user.salt)
  if (!isPasswordMatch) {
      throw new Error('用户名或者密码错误');
  }

  // 生成token
  const token = generateToken(user.id, user.username)
  // console.log(token);
  return token
}



module.exports = {
  createUser,
  loginUser
};
