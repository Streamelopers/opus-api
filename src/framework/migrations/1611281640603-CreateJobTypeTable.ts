import { query } from "express";
import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateJobTypeTable1611281640603 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "jobtypes",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                },
                {
                    name: "isactive",
                    type: "boolean",
                    isNullable: false,
                    default: true
                },
                {
                    name: "name",
                    type: "varchar",
                    isNullable: false
                },
                {
                    name: "createdat",
                    type: "datetime",
                    isNullable: false
                },
                {
                    name: "updatedat",
                    type: "datetime",
                    isNullable: false
                },
                {
                    name: "deletedat",
                    type: "datetime",
                    isNullable: true
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("jobtypes");
    }

}
