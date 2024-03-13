const fs = require("fs")
const path = require("path")

function registerRouters(app) {
  const files = fs.readdirSync(__dirname)
  
  files.forEach(file => {
    const router = require(path.join(__dirname, file))
    app.use(router.routes())
    app.use(router.allowedMethods())
  });
}

module.exports = { 
  registerRouters 
}