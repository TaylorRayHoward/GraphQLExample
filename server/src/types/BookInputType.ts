import { Field, InputType } from 'type-graphql';

@InputType()
export class BookInputType {
  @Field()
  title!: string;

  @Field()
  isbn!: string;

  @Field()
  publishedAt!: Date
}
