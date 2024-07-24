import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';
@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}
  async findAll(): Promise<User[]> {
    return this.userModel.findAll();
  }
  async create(user: Partial<User>): Promise<User> {
    return this.userModel.create(user);
  }
}