const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('your_database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mariadb',
  logging: false,
})

sequelize.sync().then(() => {
  console.log('Database & tables created!');
});

module.exports = sequelize
