import { AuthorType } from '../types/AuthorType';
import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { Author } from '../entity/Author';
import { AuthorInputType } from '../types/AuthorInputType';

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
  async addAuthor(@Arg('authorData') data: AuthorInputType): Promise<Author> {
    const author = new Author();
    author.firstName = data.firstName;
    author.lastName = data.lastName;
    return author.save();
  }

  @Mutation(returns => AuthorType)
  async updateAuthor(@Arg('id') id: string, @Arg('authorData') data: AuthorInputType) {
    const author = await Author.findOne(id);
    if(!author) {
      throw new Error('Cannot find author');
    }
    author.lastName = data.lastName;
    author.firstName = data.firstName;
    return author.save();
  }
}
