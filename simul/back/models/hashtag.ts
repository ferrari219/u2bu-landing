import { DataTypes, Model } from 'sequelize';
import { dbType } from './index';
import { sequelize } from './sequelize';

class HashTag extends Model {
  public readonly id!: number;
  public name!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}
HashTag.init(
  {
    name: {
      type: DataTypes.STRING(20),
    },
  },
  {
    sequelize,
    modelName: 'HashTag',
    tableName: 'hashtag',
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci',
  }
);

export const associate = (db: dbType) => {};
export default HashTag;
