const jwt = require("jsonwebtoken")
const fs = require("fs")
const path = require("path")

const privateKey = fs.readFileSync(path.join(__dirname, "../keys/private.key"), "utf8")
const publicKey = fs.readFileSync(path.join(__dirname, "../keys/public.key"), "utf8")

const expiresTime = 60 * 60 * 24

/**
 * 生成token
 * @param {*} userid 
 * @param {*} username 
 * @returns 
 */
function generateToken(userid, username) {
  const payload = {
    id: userid,
    name: username
  }
  const token = jwt.sign(payload, privateKey, {
    algorithm: "RS256",
    expiresIn: expiresTime //设置过期时间，单位秒
  })
  return token
}

/**
 * 验证token
 * @param {*} token 
 * @returns 
 */
function verifyToken(token) {
  return jwt.verify(token, publicKey, {
    algorithms: ["RS256"]
  })
}

module.exports = {
  generateToken,
  expiresTime,
  verifyToken
}
