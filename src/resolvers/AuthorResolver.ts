import { AuthorType } from '../types/AuthorType';
import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { Author } from '../entity/Author';
import { AddAuthor } from '../types/AddAuthorType';

@Resolver(AuthorType)
export class AuthorResolver {
  @Query(returns => [AuthorType])
  async authors(): Promise<Author[]> {
    return Author.find();
  }

  @Query(returns => AuthorType, { nullable: true })
  async author(@Arg('id') id: string): Promise<Author | undefined> {
    return Author.findOne(id);
  }

  @Mutation(returns => AuthorType)
  async addAuthor(@Arg('authorData') data: AddAuthor): Promise<Author> {
    const author = new Author();
    author.firstName = data.firstName;
    author.lastName = data.lastName;
    return author.save();
  }
}
