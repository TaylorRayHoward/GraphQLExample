import { BaseEntity, PrimaryColumn, ManyToOne, JoinColumn, Entity, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Book } from './Book';
import { Author } from './Author';

@Entity()
export class AuthorBook extends BaseEntity {
  @PrimaryColumn('uuid')
  authorId!: string;

  @PrimaryColumn('uuid')
  bookId!: string;

  @ManyToOne(type => Book, book => book.authorBooks, { primary: true })
  @JoinColumn({ name: 'book_id' })
  book!: Book;

  @ManyToOne(type => Author, author => author.authorBooks, { primary: true })
  @JoinColumn({ name: 'author_id' })
  author!: Author;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt!: Date;
}