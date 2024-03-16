// src/dal/userDAL.js

const User = require('../models/mariadb/user.model');

async function createUser(username, salt, password) {
  const newUser = new User({ username, salt, password });
  await newUser.save();
  return newUser;
};

async function findUserByUsername(username) {
  const user = await User.findOne({ where: { username }});
  return user;
}

module.exports = {
  createUser,
  findUserByUsername
}
