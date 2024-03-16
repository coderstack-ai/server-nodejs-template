const crypto = require('crypto');

/**
 * 密码hash加盐加密
 * @param {*} password 
 * @param {*} salt 
 * @returns 
 */
function hashPassword(password, salt = crypto.randomBytes(16).toString('hex')) {
    const hash = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
    return { salt, hash };
};

/**
 * 密码验证
 * @param {*} password 
 * @param {*} hash 
 * @param {*} salt 
 * @returns 
 */
function verifyPassword(password, hash, salt) {
    const inputHash = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
    return hash === inputHash;
};

module.exports = {
  hashPassword,
  verifyPassword
}