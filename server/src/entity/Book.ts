import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import { AuthorBook } from './AuthorBook';
import { LibraryBook } from './LibraryBook';

@Entity()
export class Book extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  title!: string;

  @Column()
  isbn!: string;

  @Column({ type: 'date' })
  publishedAt!: Date;

  @OneToMany(type => AuthorBook, ab => ab.book)
  authorBooks!: AuthorBook[];

  @OneToMany(type => LibraryBook, lb => lb.book)
  libraryBooks!: LibraryBook[];

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt!: Date;
}
