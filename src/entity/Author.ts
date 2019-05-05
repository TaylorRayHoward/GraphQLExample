import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Author extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  firstName!: string;

  @Column()
  lastName!: string;

  @CreateDateColumn({type: 'timestamp without time zone'})
  createdAt!: Date;

  @UpdateDateColumn({type: 'timestamp without time zone'})
  updatedAt!: Date;
}
