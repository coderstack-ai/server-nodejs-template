const Koa = require("koa")
const bodyParser = require("koa-bodyparser")
const koaSession = require("koa-session")

const { SERVER_IP, SERVER_PORT } = require("./configs/config")
const registerRouters = require("./routers")
const { expiresTime } = require("./utils/token")

const app = new Koa()
const session = koaSession({
  key: 'token',
  signed: true,
  httpOnly: true,
  maxAge: expiresTime*1000 // 这里的单位是毫秒
}, app)


// 注册中间件
app.use(bodyParser())

app.keys=["slats"]
app.use(session)

registerRouters(app)

app.listen(SERVER_PORT, SERVER_IP, () => {
  console.log(`Server started successfully: ${SERVER_IP}:${SERVER_PORT}`)
})