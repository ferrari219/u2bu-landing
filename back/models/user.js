const DataTypes = require("sequelize");
const { Model } = DataTypes;

module.exports = class User extends Model {
  static init(sequelize) {
    return super.init(
      {
        userid: {
          type: DataTypes.STRING(30),
          allowNull: false,
          unique: true,
        },
        password: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING(30),
          allowNull: false,
          unique: true,
        },
      },
      {
        charset: "utf8",
        collate: "utf8_general_ci",
        sequelize,
      }
    );
  }
  static associate(db) {
    // db.User.hasMany(db.Post);
  }
};
