
/**
 *正则判断
 *用户名只能包含大小写字母和数字
 * @param {*} username
 * @return {*} 
 */
function isValidUsername(username) {
  const regex = /^[a-zA-Z0-9]+$/;
  return regex.test(username)
}

/**
 * 正则判断
 * 密码必须包含大小写字母和数字三种类型
 * @param {*} password 
 * @returns 
 */
function isValidPassword(password) {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;
  return regex.test(password)
}

module.exports = {
  isValidUsername,
  isValidPassword
};
