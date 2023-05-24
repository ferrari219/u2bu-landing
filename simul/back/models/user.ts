import { Model, DataTypes } from 'sequelize';

import { dbType } from './index';
import { sequelize } from './sequelize';

class User extends Model {
  public readonly id!: number; //!는 반드시 존재함을 확신시켜줌
  public nickname!: string;
  public userId!: string;
  public password!: string;
  public readonly createdAt!: Date; //sequelize 자체 내에서 관리하므로 readonly
  public readonly updatedAt!: Date;
}

User.init(
  {
    nickname: {
      type: DataTypes.STRING(20),
    },
    userId: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'User',
    tableName: 'user',
    charset: 'utf8',
    collate: 'utf8_general_ci', //한글 저장
  }
);

export const associate = (db: dbType) => {};
export default User;
