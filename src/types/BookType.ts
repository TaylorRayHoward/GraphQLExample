import { Field, ObjectType } from 'type-graphql';
import { Author } from '../entity/Author';

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

  @Field(type => [Author])
  authors!: Author[];

  @Field()
  createdAt!: Date;

  @Field()
  updatedAt!: Date;
}
