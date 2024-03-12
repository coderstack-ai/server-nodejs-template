// console.log("This folder stores routes, and all external APIs are placed here.")

const fs = require("fs")

function registerRouters(app:object) {
  const dirs = fs.readdirSync(__dirname, { withFileTypes: true })
//   console.log(typeof dirs);
  
//   const routerDirs = dirs.filter(value:Object => value.isDirectory())

//   routerDirs.forEach(dir => {
//     const router = require(`./${dir.name}`)
//     app.use(router.routes())
//     app.use(router.allowedMethods())
//   });
}

export { registerRouters }
