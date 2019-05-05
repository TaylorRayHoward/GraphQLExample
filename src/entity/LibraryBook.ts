import { BaseEntity, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { Book } from './Book';
import { Library } from './Library';

@Entity()
export class LibraryBook extends BaseEntity {
  @PrimaryColumn('uuid')
  libraryId!: string;

  @PrimaryColumn('uuid')
  bookId!: string;

  @ManyToOne(type => Book, book => book.libraryBooks, { primary: true })
  @JoinColumn({ name: 'book_id' })
  book!: Book;

  @ManyToOne(type => Library, lib => lib.libraryBooks, { primary: true })
  @JoinColumn({ name: 'library_id' })
  library!: Library
}