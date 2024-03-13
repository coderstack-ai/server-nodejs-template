const Koa = require("koa")
const bodyParser = require("koa-bodyparser")
const multer = require("@koa/multer")
const static = require("koa-static")

const { SERVER_IP, SERVER_PORT } = require("./config/server")
const { registerRouters } = require("../router")

const app = new Koa()

app.use(bodyParser())
registerRouters(app)

app.listen(SERVER_PORT, SERVER_IP, () => {
  console.log(`Server started successfully: ${SERVER_IP}:${SERVER_PORT}`)
})