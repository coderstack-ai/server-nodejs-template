const KoaRouter = require("@koa/router")

const { 
  validateUsername,
  validatePassword 
} = require("../middlewares/validation.middleware")

const { register } = require("../controllers/user.controller")

const registerRouter = new KoaRouter({ prefix: "/register"})

// 注册接口
registerRouter.post("/", validateUsername, validatePassword, register)

module.exports = registerRouter