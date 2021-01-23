const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model{
    static init(sequelize) {
        return super.init({
            id : {
                type : Sequelize.STRING(50),
                primaryKey: true,
            },
            a_id : {
                type : Sequelize.STRING(30),
                allowNull :false,
                unique :true,
            },
            a_password  :{
                type : Sequelize.STRING(100),
                allowNull : false,
            },
        },{
            sequelize,
            timestamps : true,
            paranoid : true,
            deletedAt : 'destroyTime',
            tableName : 'tAdmin',
            modelName : 'tAdmin',
            underscored : false,
            charset : 'utf8mb4',
            collate: 'utf8mb4_general_ci',
        });
    }
}