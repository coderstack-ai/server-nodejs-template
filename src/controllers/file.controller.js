const multer = require("@koa/multer")
const {
  FILE_UPLOAD_SUCCESS
} = require("../utils/bodycode")

const userService = require('../services/user.service')

const path = require("path")

const uploadAvatar = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
        cb(null, path.join(__dirname, "../../uploads"))
    },
    filename(req, file, cb) {
        cb(null, Date.now() + "_" + file.originalname)
    }
  })
})

async function postAvatar(ctx, next) {
  // 获取上传的单个文件
  const file = ctx.request.file
  return ctx.body = FILE_UPLOAD_SUCCESS()
}

module.exports = { 
  uploadAvatar,
  postAvatar
}
