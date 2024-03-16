const KoaRouter = require("@koa/router")

const { 
  validateUsername,
  validatePassword 
} = require("../middlewares/validation.middleware")

const { login } = require("../controllers/user.controller")

const loginRouter = new KoaRouter({ prefix: "/login"})


loginRouter.post("/", validateUsername, validatePassword, login)

module.exports = loginRouter