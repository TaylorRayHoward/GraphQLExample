import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import { LibraryBook } from './LibraryBook';

@Entity()
export class Library extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  name!: string;

  @Column()
  state!: string;

  @Column()
  street!: string;

  @Column()
  city!: string;

  @Column()
  zip!: string;

  @OneToMany(type => LibraryBook, lb => lb.library)
  libraryBooks!: LibraryBook[];

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt!: Date;
}