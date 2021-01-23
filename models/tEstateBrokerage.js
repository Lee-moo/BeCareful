const Sequelize = require("sequelize");

module.exports = class tEstateBrokerage extends (
  Sequelize.Model
) {
  static init(sequelize) {
    return super.init(
      {
        id : {
          type : Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement : true,
        },
        regno: { //ra_regno
          type: Sequelize.STRING(30),
          primaryKey : true,
        },
        address: { //address
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        cmpNm : {
          type : Sequelize.STRING(75),
          allowNull : false,
        },
        telNo: { //telno
          type: Sequelize.TEXT,
          allowNull: true,
          defaultValye: null,
        },
        bName : { //rdealer_nm
          type : Sequelize.STRING(30),
          allowNull : true,
          defaultValue : '',
        },
        status: { // sts_gbn
          type: Sequelize.STRING(5),
          allowNull: true,
          defaultValue: "",
        },
        latitude: {
          type: Sequelize.STRING(11),
          allowNull: true,
          defaultValue: "",
        },
        longitude: {
          type: Sequelize.STRING(11),
          allowNull: true,
          defaultValue: "",
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: false,
        modelName: "tEstateBrokerage",
        tableName: "tEstateBrokerage",
        paranoid: true,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }
  static associate(db) {
    db.tEstateBrokerage.hasMany(db.tComment, {
      foreignKey: "brokerage",
      sourceKey: "id",
    });
  }
};
