import { Sequelize } from 'sequelize';
import config from '../config/config';

const env =
  (process.env.NODE_ENV as 'production' | 'test' | 'development') ||
  'development'; // type 추론 할 수 있게 as () 사용

const { database, username, password } = config[env];
const sequelize = new Sequelize(database, username, password, config[env]);

export { sequelize };
export default sequelize;
