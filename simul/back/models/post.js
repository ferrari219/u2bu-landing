const DataType = require('sequelize');
const { Model } = DataType;

module.exports = class Post extends Model {
  static init(sequelize) {
    return super.init(
      {
        content: {
          type: DataType.TEXT,
          allowNull: false,
        },
      },
      {
        modelName: 'Post',
        tableName: 'posts',
        charset: 'utf8',
        collate: 'utf8_general_ci',
        sequelize,
      }
    );
  }
  static associate(db) {
    db.Post.hasMany(db.Image);
  }
};
