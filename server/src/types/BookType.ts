import { Field, ObjectType } from 'type-graphql';
import { AuthorType } from './AuthorType';

@ObjectType()
export class BookType {
  @Field()
  id!: string;

  @Field()
  title!: string;

  @Field()
  isbn!: string;

  @Field()
  publishedAt!: string;

  @Field(type => [AuthorType])
  authors!: AuthorType[];

  @Field()
  createdAt!: Date;

  @Field()
  updatedAt!: Date;
}
