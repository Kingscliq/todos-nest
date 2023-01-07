import { CreateUserDto } from './dtos/create.user.dto';
import { Body, Controller, Get, Param, ParseIntPipe, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { Users } from './dtos/users.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get('sorted')
  getSingleSortedTodo(@Query('sortBy') sortBy: string): string {
    return `${sortBy}`;
  }

  @Post('register')
  @UsePipes(new ValidationPipe()) // Add a new Instance of validation pipes for class validators to work
  createUser(@Body() createUserDto: CreateUserDto): string {
    return `Created user ${createUserDto.username}`;
  }

  @Get()
  getAllUsers(): Users[] {
    return this.userService.fetchUsers();
  }
  @Get(':id')
  getSinglUser(@Param('id', ParseIntPipe) id: number): { id: number } {
    return { id };
  }
}
