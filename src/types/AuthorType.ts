import { Field, ObjectType } from 'type-graphql';
import { BookType } from './BookType';

@ObjectType()
export class AuthorType {
  @Field()
  id!: string;

  @Field()
  firstName!: string;

  @Field()
  lastName!: string;

  @Field()
  fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  @Field(type => [BookType])
  books!: BookType[]
}