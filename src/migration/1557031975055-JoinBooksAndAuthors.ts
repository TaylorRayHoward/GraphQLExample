import {MigrationInterface, QueryRunner} from "typeorm";

export class JoinBooksAndAuthors1557031975055 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "author_book" ("author_id" uuid NOT NULL, "book_id" uuid NOT NULL, "book_id " uuid NOT NULL, CONSTRAINT "PK_fc0481a4970d873e2352bf0739e" PRIMARY KEY ("author_id", "book_id", "book_id "))`);
        await queryRunner.query(`ALTER TABLE "author_book" ADD CONSTRAINT "FK_6ee3578099cebd775dfa7a75e15" FOREIGN KEY ("book_id ") REFERENCES "book"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "author_book" ADD CONSTRAINT "FK_12f40a8bac53dadeecab5eb771a" FOREIGN KEY ("author_id") REFERENCES "author"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "author_book" DROP CONSTRAINT "FK_12f40a8bac53dadeecab5eb771a"`);
        await queryRunner.query(`ALTER TABLE "author_book" DROP CONSTRAINT "FK_6ee3578099cebd775dfa7a75e15"`);
        await queryRunner.query(`DROP TABLE "author_book"`);
    }

}
