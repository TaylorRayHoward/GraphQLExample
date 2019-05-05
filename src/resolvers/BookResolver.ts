import { Arg, FieldResolver, Mutation, Query, Resolver, Root } from 'type-graphql';
import { BookType } from '../types/BookType';
import { Book } from '../entity/Book';
import { BookInputType } from '../types/BookInputType';
import { AuthorType } from '../types/AuthorType';
import { Author } from '../entity/Author';
import { AuthorBook } from '../entity/AuthorBook';

@Resolver(type => BookType)
export class BookResolver {
  @Query(returns => [BookType])
  async books(): Promise<Book[]> {
    return await Book.find();
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

  @FieldResolver(returns => [AuthorType])
  async authors(@Root() book: BookType): Promise<Author[]> {
    const authors = await AuthorBook.find({ where: { bookId: book.id }, relations: ['author'] });
    return authors.map(a => a.author);
  }

}