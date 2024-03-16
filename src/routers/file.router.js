const KoaRouter = require("@koa/router")

const { validateToken } = require("../middlewares/validation.middleware")
const { 
  uploadAvatar,
  postAvatar
} = require("../controllers/file.controller")

const fileRouter = new KoaRouter({ prefix: "/file"})

// 上传头像
fileRouter.post("/avatar", validateToken, uploadAvatar.single("avatar"), postAvatar)


module.exports = fileRouter