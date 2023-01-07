import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    { username: 'Kings', email: 'kings@gmail.com' },
    { username: 'paul', email: 'paul@gmail.com' },
    { username: 'darl', email: 'darl@gmail.com' },
  ];
  fetchUsers = () => {
    return this.users;
  };
}
