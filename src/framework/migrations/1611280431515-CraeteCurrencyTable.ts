import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CraeteCurrencyTable1611280431515 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "currencies",
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
                    name: "symbol",
                    type: "varchar",
                    isNullable: false
                },
                {
                    name: "isocode",
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
        await queryRunner.dropTable("users");
    }

}
