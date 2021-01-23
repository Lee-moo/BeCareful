const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const tUser = require('./tUser');
const tComment = require('./tComment');
const tAdmin = require('./tAdmin');
const tEstateBrokerage = require('./tEstateBrokerage');

const db = {};
const sequelize = new Sequelize(
  config.database, config.username, config.password, config,
);

db.sequelize = sequelize;
db.tUser = tUser;
db.tComment = tComment;
db.tAdmin = tAdmin;
db.tEstateBrokerage = tEstateBrokerage;


tUser.init(sequelize);
tComment.init(sequelize);
tAdmin.init(sequelize);
tEstateBrokerage.init(sequelize);

tUser.associate(db);
tComment.associate(db);
tEstateBrokerage.associate(db);


module.exports = db;

