import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateLibraryBookConnection1557097005527 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "library_book" ("library_id" uuid NOT NULL, "book_id" uuid NOT NULL, CONSTRAINT "PK_a261814d58bce90876f584e31d9" PRIMARY KEY ("library_id", "book_id"))`);
        await queryRunner.query(`ALTER TABLE "library_book" ADD CONSTRAINT "FK_50273de1f27fbd52ddab825511e" FOREIGN KEY ("book_id") REFERENCES "book"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "library_book" ADD CONSTRAINT "FK_124b825b1c7ca4d54e861752613" FOREIGN KEY ("library_id") REFERENCES "library"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "library_book" DROP CONSTRAINT "FK_124b825b1c7ca4d54e861752613"`);
        await queryRunner.query(`ALTER TABLE "library_book" DROP CONSTRAINT "FK_50273de1f27fbd52ddab825511e"`);
        await queryRunner.query(`DROP TABLE "library_book"`);
    }

}
