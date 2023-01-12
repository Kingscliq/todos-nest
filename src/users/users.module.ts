import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersMiddleware } from './users.middleware';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule implements NestModule {
  configure(auth: MiddlewareConsumer) {
    auth
      .apply(UsersMiddleware)
      .exclude({
        path: 'users/register',
        method: RequestMethod.POST,
      })
      .forRoutes(UsersController); // This makes it possible to use all routes inside of users controller
  }
}
