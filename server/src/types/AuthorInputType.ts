import { Field, InputType } from 'type-graphql';

@InputType()
export class AuthorInputType {
  @Field()
  firstName!: string;

  @Field()
  lastName!: string;
}
