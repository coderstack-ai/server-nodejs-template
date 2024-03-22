const userService = require('../services/user.service')
const svgCaptcha = require('svg-captcha')

/**
 * 生成并发送图形验证码
 *
 * @param {*} ctx
 */
async function captcha(ctx) {
  // 创建数学题型的验证码
  let captcha = svgCaptcha.createMathExpr({
      size: 6, // 验证码长度
      noise: 10, // 噪声线条数
      color: true, // 验证码的字符有颜色，而不是黑白
      background: '#cccccc' // 背景色
  });

  // 将验证码文本（答案）存储在会话中，这里示例使用ctx.session，需要koa-session中间件
  ctx.session.captcha = captcha.text;

  // 设置响应头
  ctx.type = 'image/svg+xml';
  ctx.body = captcha.data;
}


module.exports = { 
  captcha
};
