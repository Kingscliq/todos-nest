import { UserDetail } from './interfaces/user.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    { id: 2, username: 'Kings', email: 'kings@gmail.com', age: 20 },
    { id: 5, username: 'paul', email: 'paul@gmail.com', age: 24 },
    { id: 10, username: 'darl', email: 'darl@gmail.com', age: 29 },
  ];

  fetchUsers = () => {
    return this.users;
  };

  createUser = (details: UserDetail) => {
    this.users.push(details as any);
    return;
  };

  fetchSingleUser = (id: number): UserDetail => {
    const userDetail = this.users.find((user) => user.id === id);
    return userDetail;
  };
}
