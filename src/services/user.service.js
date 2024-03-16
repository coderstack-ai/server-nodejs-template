const userDAL = require('../dal/user.dal');
const {
  hashPassword,
  verifyPassword
} = require("../utils/crypto")
/**
 * 判断用户是否已经存在于数据库中
 * @param {*} username 
 */
async function isUserExisting(username) {
  const user = await userDAL.findUserByUsername(username);
  if (user) throw new Error ('Username already exists');
}

/**
 * 用户信息进行注册
 * @param {*} username 
 * @param {*} password 
 * @returns 
 */
async function createUser(username, password) {
  // 检查用户名是否存在
  await isUserExisting(username)

  // 密码加密
  const { salt, hash } = hashPassword(password)

  // 存储
  return await userDAL.createUser(username, salt, hash);
}

module.exports = { createUser };
