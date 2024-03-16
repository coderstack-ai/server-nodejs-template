/**
 * 
 */

const {
    USER_REGISTER_SUCCESS,
    USER_REGISTER_ERROR
  } = require("../utils/bodycode")
const userService = require('../services/user.service');

/**
 * 注册用户名密码
 *
 * @param {*} ctx
 */
 async function register(ctx) {
    try {
        const { username, password } = ctx.request.body;
        const user = await userService.createUser(username, password);
        ctx.body = USER_REGISTER_SUCCESS(user);
    } catch (error) {
        ctx.body = USER_REGISTER_ERROR(error.message)
    }
};

module.exports = { register };
