import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { BookType } from '../types/BookType';
import { Book } from '../entity/Book';
import { BookInputType } from '../types/BookInputType';

@Resolver(type => BookType)
export class BookResolver {
  @Query(returns => [BookType])
  async books(): Promise<Book[]> {
    return Book.find();
  }

  @Query(returns => BookType, { nullable: true })
  async book(@Arg('id') id: string): Promise<Book | undefined> {
    return Book.findOne(id);
  }

  @Mutation(returns => BookType)
  async addBook(@Arg('book') data: BookInputType): Promise<Book> {
    const book = new Book();
    book.isbn = data.isbn;
    book.title = data.title;
    book.publishedAt = data.publishedAt;
    return book.save();
  }
}