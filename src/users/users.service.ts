import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { GetUserArgs } from './dto/args/get-user.args';
import { GetUsersArgs } from './dto/args/get-users.args';
import { CreateUserInput } from './dto/input/create-user.input';
import { DeleteUserInput } from './dto/input/delete-user.input';
import { UpdateUserInput } from './dto/input/update-user.input';
import { User } from './models/user';

@Injectable()
export class UsersService {
  private list: User[] = [];

  async createOne(createUserData: CreateUserInput): Promise<User> {
    const user = {
      id: uuid(),
      ...createUserData,
    };
    this.list.push(user);
    return Promise.resolve(user);
  }

  async updateOne(updateUserData: UpdateUserInput): Promise<User> {
    const user = this.list.find((item) => item.id === updateUserData.id);
    Object.assign(user, updateUserData);
    return Promise.resolve(user);
    /*
    this.list = this.list.map((item) =>
      item.id === updateUserData.id ? { ...item, ...updateUserData } : item,
    );
    return Promise.resolve(
      this.list.find((item) => item.id === updateUserData.id),
    );
    */
  }

  async getOne(getUser: GetUserArgs): Promise<User> {
    return Promise.resolve(this.list.find((item) => item.id === getUser.id));
  }

  async getAll(getUsersArgs: GetUsersArgs): Promise<User[]> {
    return Promise.resolve(
      getUsersArgs.ids.map((id) => this.list.find((item) => item.id === id)),
    );
    /*
    return Promise.resolve(
      this.list.filter((item) => item.id in getUsersArgs.ids),
    );
    */
  }

  async deleteOne(deleteUserData: DeleteUserInput): Promise<void> {
    this.list = this.list.filter((item) => item.id !== deleteUserData.id);
  }
}
