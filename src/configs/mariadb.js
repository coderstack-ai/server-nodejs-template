const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('testdb', 'root', '1', {
  host: 'localhost',
  dialect: 'mariadb',
  logging: false,
})

sequelize.sync().then(() => {
  console.log('Database & tables created!');
});

module.exports = sequelize
