const DataTypes = require('sequelize');
const { Model } = DataTypes;

module.exports = class Post extends Model {
  static init(sequelize) {
    return super.init(
      {
        applyName: {
          type: DataTypes.STRING(30),
          allowNull: false,
          unique: false,
        },
        birth: {
          type: DataTypes.STRING(30),
          allowNull: false,
          unique: false,
        },
        phone: {
          type: DataTypes.STRING(30),
          allowNull: false,
          unique: true,
        },
        address: {
          type: DataTypes.STRING(100),
          allowNull: false,
          unique: false,
        },
        content: {
          type: DataTypes.TEXT,
          allowNull: false,
          unique: false,
        },
      },
      {
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
        sequelize,
      }
    );
  }
  static associate(db) {
    db.Post.hasMany(db.Image);
  }
};
