import {MigrationInterface, QueryRunner} from "typeorm";

export class JoinBooksAndAuthors1557032436261 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "author_book" ("author_id" uuid NOT NULL, "book_id" uuid NOT NULL, CONSTRAINT "PK_381301778d838777e5e53df1f27" PRIMARY KEY ("author_id", "book_id"))`);
        await queryRunner.query(`ALTER TABLE "author_book" ADD CONSTRAINT "FK_0ff619ecdfb79dccf3218494f08" FOREIGN KEY ("book_id") REFERENCES "book"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "author_book" ADD CONSTRAINT "FK_12f40a8bac53dadeecab5eb771a" FOREIGN KEY ("author_id") REFERENCES "author"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "author_book" DROP CONSTRAINT "FK_12f40a8bac53dadeecab5eb771a"`);
        await queryRunner.query(`ALTER TABLE "author_book" DROP CONSTRAINT "FK_0ff619ecdfb79dccf3218494f08"`);
        await queryRunner.query(`DROP TABLE "author_book"`);
    }

}
