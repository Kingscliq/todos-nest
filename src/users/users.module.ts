import { MiddlewareConsumer, Module, NestMiddleware, NestModule } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersMiddleware } from './users.middleware';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule implements NestModule {
  configure(auth: MiddlewareConsumer) {
    auth.apply(UsersMiddleware).forRoutes('users');
  }
}
