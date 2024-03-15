const User = require('../models/user.model');

class UserRepository {
  async createUser(userData) {
    const user = await User.create(userData);
    return user;
  }
}

module.exports = new UserRepository();
