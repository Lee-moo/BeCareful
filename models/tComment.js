const Sequelize = require('sequelize');

module.exports = class tComment extends Sequelize.Model{
    static init(sequelize) {
        return super.init({
            comment : {
                type : Sequelize.TEXT,
                allowNull : true,
            },
            ref_comment : {
                type : Sequelize.TEXT,
                allowNull : true,
            },
        },{
            sequelize,
            timestamps : true,
            paranoid : true,
            deletedAt : 'destroyTime',
            modelName : 'tComment',
            tableName : 'tComment',
            underscored : false,
            charset : 'utf8mb4',
            collate: 'utf8mb4_general_ci',
        });
    }
    static associate(db) {
        db.tComment.belongsTo(db.tUser, {foreignKey :'commenter', targetKey :'id'});
        db.tComment.belongsTo(db.tEstateBrokerage, {foreignKey :'brokerage', targetKey : 'id'});
    }
}