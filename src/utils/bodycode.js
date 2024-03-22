// 用户验证相关
const USER_NAME_NONE_ERROR = () => { return { code: -1, message: "用户名不能为空"}}
const USER_NAME_LENGTH_ERROR = () => { return { code: -1, message: "用户名长度错误，只支持6~16位"}}
const USER_NAME_CHAR_ERROR = () => { return { code: -1, message: "用户名错误，只支持大小写字母和数字"}}
const USER_PASSWORD_NONE_ERROR = () => { return { code: -1, message: "密码不能为空"}}
const USER_PASSWORD_LENGTH_ERROR = () => { return { code: -1, message: "密码长度错误，只支持8~18位"}}
const USER_PASSWORD_CHAR_ERROR = () => { return { code: -1, message: "密码错误，必须包含大小写字母和数字"}}
const USER_REGISTER_SUCCESS = (user) => { return { code: 0, message: "用户注册成功", data:user}}
const USER_REGISTER_ERROR = (msg) => { return { code: 0, message: msg}}
const USER_LOGIN_SUCCESS = () => { return { code: 0, message: "用户登录成功"}}
const USER_LOGIN_ERROR = (msg) => { return { code: 0, message: msg}}
const USER_TOKEN_ERROR = (msg) => { return { code: 0, message: msg} }

/**
 * 文件上传
 * @returns 
 */
const FILE_UPLOAD_SUCCESS = () => { return { code: 0, message: "文件上传成功"} }

module.exports = {
  USER_NAME_NONE_ERROR,
  USER_NAME_LENGTH_ERROR,
  USER_NAME_CHAR_ERROR,
  USER_PASSWORD_NONE_ERROR,
  USER_PASSWORD_LENGTH_ERROR,
  USER_PASSWORD_CHAR_ERROR,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_ERROR,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_ERROR,
  USER_TOKEN_ERROR,
  FILE_UPLOAD_SUCCESS
}