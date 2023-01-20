import { Mutation, Resolver } from 'type-graphql';

@Resolver()
export class UserResolver {
  @Mutation(() => String)
  register() {
    return 'bye'
  }
}
