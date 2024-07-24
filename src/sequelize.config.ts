import { SequelizeModuleOptions } from '@nestjs/sequelize';
import { User } from './users/user.model';
const sequelizeConfig: SequelizeModuleOptions = {
  dialect: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root1234',
  database: 'users',
  autoLoadModels: true, 
  synchronize: true, 
}
export default sequelizeConfig;