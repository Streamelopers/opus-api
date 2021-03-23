import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateCompaniesTable1611094497293 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "companies",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                },
                {
                    name: "is_active",
                    type: "boolean",
                    default: true
                },
                {
                    name: "name",
                    type: "varchar",
                    length: "200",
                },
                {
                    name: "user_id",
                    type: "integer"
                },
                {
                    name: "createdat",
                    type: "timestamp"
                },
                {
                    name: "updatedat",
                    type: "timestamp"
                },
                {
                    name: "deletedat",
                    type: "timestamp",
                    isNullable: true
                }
            ]
        }));
        await queryRunner.createForeignKey(
            'companies',
            new TableForeignKey({
                columnNames: ["user_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "users",
                onDelete: "CASCADE"
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('companies');
    }

}
