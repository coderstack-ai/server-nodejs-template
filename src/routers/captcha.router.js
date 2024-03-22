// 验证码接口
const KoaRouter = require("@koa/router")

const { captcha } = require("../controllers/captcha.controller")

const captchaRouter = new KoaRouter({ prefix: "/captcha"})


captchaRouter.get("/", captcha)

module.exports = captchaRouter