import { CreateUserDto } from './dtos/create.user.dto';
import { Body, Controller, Get, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get('sorted')
  getSingleSortedTodo(@Query('sortBy') sortBy: string): string {
    return `${sortBy}`;
  }

  @Post('register')
  @UsePipes(new ValidationPipe()) // Add a new Instance of validation pipes for class validators to work
  createUser(@Body() createUserDto: CreateUserDto): string {
    console.log(createUserDto);
    return `Created user ${createUserDto.username}`;
  }
}
