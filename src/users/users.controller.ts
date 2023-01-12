import { CreateUserDto } from './dtos/create.user.dto';
import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Users } from './dtos/users.dto';
import { UsersService } from './users.service';
import { UserDetail } from './interfaces/user.interface';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get('sorted')
  getSingleSortedTodo(@Query('sortBy') sortBy: string): string {
    return `${sortBy}`;
  }

  @Post('register')
  @UsePipes(new ValidationPipe()) // Add a new Instance of validation pipes for class validators to work
  createUser(@Body() createUserDto: CreateUserDto): { message: string; status: number; success: boolean } {
    this.userService.createUser(createUserDto);

    return {
      message: 'User Created SuccessFully',
      status: 200,
      success: true,
    };
  }

  @Get()
  getAllUsers(): Users[] {
    return this.userService.fetchUsers();
  }

  @Get(':id')
  getSinglUser(@Param('id', ParseIntPipe) id: number): UserDetail {
    const user = this.userService.fetchSingleUser(id);

    if (!user) {
      throw new HttpException('User not Found', HttpStatus.BAD_REQUEST);
    }
    return user;
  }
}
