import { CreateUserDetail } from './interfaces/user.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    { id: 2, username: 'Kings', email: 'kings@gmail.com' },
    { id: 5, username: 'paul', email: 'paul@gmail.com' },
    { id: 10, username: 'darl', email: 'darl@gmail.com' },
  ];

  fetchUsers = () => {
    return this.users;
  };

  createUser = (details: CreateUserDetail) => {
    this.users.push(details as any);
    return;
  };

  fetchSingleUser = () => {
    return null;
  };
}
