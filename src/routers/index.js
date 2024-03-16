const fs = require("fs")
const path = require("path")

/**
 * 注册当前文件夹下所有router.js结尾的路由
 * @param {*} app 
 */
function registerRouters(app) {
  const files = fs.readdirSync(__dirname)
  
  files.forEach(file => {
    if (file.endsWith("router.js")) {
      const router = require(path.join(__dirname, file))
      app.use(router.routes())
      app.use(router.allowedMethods())
    }
  });
}

module.exports = registerRouters 
