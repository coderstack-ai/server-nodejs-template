
const User = require('../models/mariadb/user.model');

/**
 * 插入数据
 * @param {*} username
 * @param {*} salt
 * @param {*} password
 * @return {*} 
 */
async function createUser(username, salt, password) {
  const newUser = new User({ username, salt, password });
  await newUser.save();
  return newUser;
};

/**
 * 查询数据
 * @param {*} username 
 * @returns 
 */
async function findUserByUsername(username) {
  const user = await User.findOne({ where: { username }});
  return user;
}












module.exports = {
  createUser,
  findUserByUsername
}
