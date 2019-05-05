import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class LibraryType {
  @Field()
  id!: string;

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

  @Field()
  createdAt!: Date;

  @Field()
  updatedAt!: Date;
}