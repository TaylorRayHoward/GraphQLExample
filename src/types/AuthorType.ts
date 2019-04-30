import { Field, ObjectType } from 'type-graphql';

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
}