import {MigrationInterface, QueryRunner} from "typeorm";

export class AddDates1556675191825 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "author" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "author" ADD "updated_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "book" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "book" ADD "updated_at" TIMESTAMP NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "book" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "book" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "author" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "author" DROP COLUMN "created_at"`);
    }

}
