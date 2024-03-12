const Koa = require("koa")
const bodyParser = require("koa-bodyparser")

import { registerRouters } from "../api"

const app = new Koa()

app.use(bodyParser())
registerRouters(app)

export { app }