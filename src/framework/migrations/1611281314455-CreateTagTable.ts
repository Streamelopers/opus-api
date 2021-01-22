import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTagTable1611281314455 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "tags",
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
        await queryRunner.dropTable("tags");
    }
}
