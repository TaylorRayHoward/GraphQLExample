import {MigrationInterface, QueryRunner} from "typeorm";

export class AddDatesForJoin1557032649323 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "author_book" DROP CONSTRAINT "FK_6ee3578099cebd775dfa7a75e15"`);
        await queryRunner.query(`ALTER TABLE "author_book" DROP CONSTRAINT "PK_fc0481a4970d873e2352bf0739e"`);
        await queryRunner.query(`ALTER TABLE "author_book" ADD CONSTRAINT "PK_381301778d838777e5e53df1f27" PRIMARY KEY ("author_id", "book_id")`);
        await queryRunner.query(`ALTER TABLE "author_book" DROP COLUMN "book_id "`);
        await queryRunner.query(`ALTER TABLE "author_book" ADD CONSTRAINT "FK_0ff619ecdfb79dccf3218494f08" FOREIGN KEY ("book_id") REFERENCES "book"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "author_book" DROP CONSTRAINT "FK_0ff619ecdfb79dccf3218494f08"`);
        await queryRunner.query(`ALTER TABLE "author_book" ADD "book_id " uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "author_book" DROP CONSTRAINT "PK_381301778d838777e5e53df1f27"`);
        await queryRunner.query(`ALTER TABLE "author_book" ADD CONSTRAINT "PK_fc0481a4970d873e2352bf0739e" PRIMARY KEY ("author_id", "book_id", "book_id ")`);
        await queryRunner.query(`ALTER TABLE "author_book" ADD CONSTRAINT "FK_6ee3578099cebd775dfa7a75e15" FOREIGN KEY ("book_id ") REFERENCES "book"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
