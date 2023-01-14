import { AuthGuard } from './users.guard';

describe('UsersGuard', () => {
  it('should be defined', () => {
    expect(new AuthGuard()).toBeDefined();
  });
});
