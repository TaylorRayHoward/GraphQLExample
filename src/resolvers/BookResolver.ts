import { Arg, Query, Resolver } from 'type-graphql';
import { BookType } from '../types/BookType';
import { Book } from '../entity/Book';

@Resolver(type => BookType)
export class BookResolver {
  @Query(returns => [BookType])
  books(): Promise<Book[]> {
    return Book.find();
  }

  @Query(returns => BookType, { nullable: true })
  book(@Arg('id') id: string): Promise<Book | undefined> {
    return Book.findOne(id);
  }
}