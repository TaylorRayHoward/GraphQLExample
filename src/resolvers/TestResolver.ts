import { Query, Resolver } from 'type-graphql';
import { TestType } from '../types/TestType';

@Resolver(TestType)
export class TestResolver {
  @Query(returns => TestType)
  test(): TestType {
    return {
      test: 'ayyyy'
    };
  }
}