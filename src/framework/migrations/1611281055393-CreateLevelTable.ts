import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateLevelTable1611281055393 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(new Table({
            name: "levels",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true
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
        await queryRunner.dropTable("levels");
    }

}
