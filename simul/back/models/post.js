const DataTypes = require('sequelize');
const { Model } = require(DataTypes);

module.exports = class Post extends Model {
  static init(sequelize) {
    return super.init({});
  }
};
