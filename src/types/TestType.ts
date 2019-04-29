import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class TestType {
  @Field()
  test: string
}
