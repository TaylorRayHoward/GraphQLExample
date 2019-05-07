import { Arg, FieldResolver, Mutation, Query, Resolver, Root } from 'type-graphql';
import { LibraryType } from '../types/LibraryType';
import { Library } from '../entity/Library';
import { BookType } from '../types/BookType';
import { Book } from '../entity/Book';
import { LibraryBook } from '../entity/LibraryBook';
import { AuthorType } from '../types/AuthorType';
import { AuthorBook } from '../entity/AuthorBook';
import { In } from 'typeorm';
import { Author } from '../entity/Author';
import { LibraryInputType } from '../types/LibraryInputType';

@Resolver(type => LibraryType)
export class LibraryResolver {
  @Query(returns => [LibraryType])
  async libraries(): Promise<LibraryType[]> {
    const x = Library.find();
    return x;
  }

  @Query(returns => LibraryType, { nullable: true })
  async library(@Arg('id') id: string): Promise<Library | undefined> {
    return Library.findOne(id);
  }

  @Mutation(returns => LibraryType)
  async addLibrary(@Arg('libraryData') data: LibraryInputType): Promise<Library> {
    const library = new Library();
    for (const [key, value] of Object.entries(data)) {
      (library as any)[key] = value;
    }
    return library.save();
  }

  @Mutation(returns => LibraryType)
  async addBookToLibrary(@Arg('libraryId') libraryId: string, @Arg('bookId') bookId: string): Promise<Library> {
    const library = await Library.findOne(libraryId);
    if (!library) {
      throw new Error('library not found');
    }
    const book = await Book.findOne(bookId);
    if (!book) {
      throw new Error('book not found');
    }

    const libraryBook = new LibraryBook();
    libraryBook.bookId = bookId;
    libraryBook.libraryId = libraryId;
    await libraryBook.save();
    return library;
  }

  @FieldResolver(returns => [BookType])
  async books(@Root() library: LibraryType): Promise<Book[]> {
    const books = await LibraryBook.find({
      relations: ['book'], where: {
        libraryId: library.id
      }
    });

    return books.map(b => b.book);
  }

  @FieldResolver(returns => [AuthorType])
  async authors(@Root() library: LibraryType): Promise<Author[]> {
    const bookIds = (await LibraryBook.find({
      where: {
        libraryId: library.id
      }
    })).map(b => b.bookId);

    const authorIds = (await AuthorBook.find({
      where: {
        bookId: In(bookIds)
      }
    })).map(a => a.authorId);

    const unique = [...new Set(authorIds)];

    return Author.find({
      where: {
        id: In(unique)
      }
    });
  }
}
