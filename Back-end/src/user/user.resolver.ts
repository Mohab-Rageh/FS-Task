import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User, UserInput } from './user.schema';

@Resolver(() => User)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => User)
  async user(@Args('userId') userId: number): Promise<{ user: User }> {
    return this.userService.getUser(userId);
  }

  @Mutation(() => User)
  async updateUser(
    @Args('userId') userId: number,
    @Args('input') input: UserInput,
  ): Promise<User> {
    const user = await this.userService.updateUser(userId, input);
    return user;
  }
}
