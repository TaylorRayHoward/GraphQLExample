import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateLibrary1557095451024 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "library" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "state" character varying NOT NULL, "street" character varying NOT NULL, "city" character varying NOT NULL, "zip" character varying NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_3a61ae2e897d9b5a59a64e91aa4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "book" DROP COLUMN "published_at"`);
        await queryRunner.query(`ALTER TABLE "book" ADD "published_at" date NOT NULL`);
        await queryRunner.query(`ALTER TABLE "book" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "book" ADD "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "book" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "book" ADD "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "author_book" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "author_book" ADD "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "author_book" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "author_book" ADD "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "author" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "author" ADD "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "author" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "author" ADD "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "author" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "author" ADD "updated_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "author" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "author" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "author_book" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "author_book" ADD "updated_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "author_book" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "author_book" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "book" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "book" ADD "updated_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "book" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "book" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "book" DROP COLUMN "published_at"`);
        await queryRunner.query(`ALTER TABLE "book" ADD "published_at" TIMESTAMP NOT NULL`);
        await queryRunner.query(`DROP TABLE "library"`);
    }

}
