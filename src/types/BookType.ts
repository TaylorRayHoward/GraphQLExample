import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class BookType {
  @Field()
  id!: string;

  @Field()
  title!: string;

  @Field()
  isbn!: string;

  @Field()
  publishedAt!: Date;

  @Field()
  createdAt!: Date;

  @Field()
  updatedAt!: Date;
}
