import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Book extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  title!: string;

  @Column()
  isbn!: string;

  @Column()
  publishedAt!: Date;

  @CreateDateColumn({type: 'timestamp without time zone'})
  createdAt!: Date;

  @UpdateDateColumn({type: 'timestamp without time zone'})
  updatedAt!: Date;
}
