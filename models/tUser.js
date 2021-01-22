//관리자 테이블 따로
//사용자 테이블 따로 

//관리자 테이블, 아이디 비밀번호, 
//사용자 테이블, id, email, sns_id, provider, createdAt, 
//updatedAt, destroyTime, ... add later ... 

const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            email : {
                type : Sequelize.STRING(50),
                allowNull : true,
            },
            sns_id : {
                type : Sequelize.STRING(30),
                allowNUll : false,
            },
            provider : {
                type : Sequelize.STRING(30),
                allowNull : false,
            },
        }, {
            sequelize,
            timestamps : true,
            paranoid : true,
            deletedAt : 'destroyTime',
            modelName : 'tUser',
            tableName : 'tUser',
            underscored : false,
            charset : 'utf8mb4',
            collate: 'utf8mb4_general_ci',
        });
    }
}