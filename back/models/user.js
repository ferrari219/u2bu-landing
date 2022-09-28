const DataTypes = require('sequelize');
const { Model } = DataTypes;

module.exports = class User extends Model {
  static init(sequelize) {
    return super.init(
      ({
        email: {
          type: DataTypes.STRING(30),
          allowNull: false,
          unique: true,
        },
        nickname: {
          type: DataTypes.STRING(30),
          allowNull: false,
        },
        password: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
      },
      {
        charset: 'utf8',
        collate: utf8_general_cli,
      })
    );
  }
  static associate(db) {
    // db.User.hasMany(db.Post);
  }
};
