const userService = require('../services/UserService');

class UserController {
  async register(ctx) {
    try {
      const user = await userService.register(ctx.request.body);
      ctx.status = 201; // Created
      ctx.body = user;
    } catch (error) {
      ctx.status = 400; // Bad Request
      ctx.body = { error: error.message };
    }
  }
}

module.exports = new UserController();
