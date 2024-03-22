// 用户注册接口
const KoaRouter = require("@koa/router")

const { 
  validateUsername,
  validatePassword 
} = require("../middlewares/validation.middleware")

const { register } = require("../controllers/user.controller")

const registerRouter = new KoaRouter({ prefix: "/register"})


registerRouter.post("/", validateUsername, validatePassword, register)

module.exports = registerRouter