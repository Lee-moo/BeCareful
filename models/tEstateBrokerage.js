const Sequelize = require('sequelize');

module.exports = class tEstateBrokerage extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
           refno : {
               type : Sequelize.STRING(30),
               allowNull : false,
               unique : true,
           },
           address : {
               type : Sequelize.STRING(100),
               allowNull : false,
               unique : true,
           },
           cmpNm : {
               type : Sequelize.STRING(75),
               allowNull : false,
           },
           telNo : {
               type : Sequelize.STRING(40),
               allowNull : true,
           },
           status : {
               type : Sequelize.BOOLEAN,
               allowNull : true,
           }
        }, {
            sequelize, 
            timestamps : true,
            underscored : false,
            modelName : 'tEstateBrokerage',
            tableName : 'tEstateBrokerage',
            paranoid : true,
            charset : 'utf8mb4',
            collate : 'utf8mb4_general_ci',
        });
    }
    // associate(db) {} .... comment, 
}