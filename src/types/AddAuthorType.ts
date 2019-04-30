import { Field, InputType } from 'type-graphql';

@InputType()
export class AddAuthor {
  @Field()
  firstName!: string;

  @Field()
  lastName!: string;
}
