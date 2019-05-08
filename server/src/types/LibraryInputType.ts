import { Field, InputType } from 'type-graphql';

@InputType()
export class LibraryInputType {
  @Field()
  name!: string;

  @Field()
  state!: string;

  @Field()
  street!: string;

  @Field()
  city!: string;

  @Field()
  zip!: string;
}