import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateJobTable1611425345900 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "jobs",
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
                    name: "title",
                    type: "varchar"
                },
                {
                    name: "description",
                    type: "varchar",
                    
                },
                {
                    name: "how_to_apply",
                    type: "varchar",
                    
                },
                {
                    name: "min_salary",
                    type: "numeric",
                    precision: 18,
                    scale: 2,
                    isNullable: true
                    
                },
                {
                    name: "max_salary",
                    type: "numeric",
                    precision: 18,
                    scale: 2,
                    isNullable: true
                    
                },
                {
                    name: "is_remote",
                    type: "boolean",
                    default: false
                    
                },
                {
                    name: "is_remote_only",
                    type: "boolean",
                    default: false
                    
                },
                {
                    name: "user_id",
                    type: "integer",
                },
                {
                    name: "company_id",
                    type: "integer",
                },
                {
                    name: "currency_id",
                    type: "integer",
                    isNullable: true
                },
                {
                    name: "payment_type_id",
                    type: "integer",
                    isNullable: true
                },
                {
                    name: "location_id",
                    type: "integer",
                },
                {
                    name: "job_type_id",
                    type: "integer",
                },
                {
                    name: "level_id",
                    type: "integer",
                },
                {
                    name: "createdat",
                    type: "timestamp",
                    
                },
                {
                    name: "updatedat",
                    type: "timestamp",
                    
                },
                {
                    name: "deletedat",
                    type: "timestamp",
                    isNullable: true
                }
            ]
        }));

        // relations
        await queryRunner.createForeignKeys(
            "jobs",
            [
                new TableForeignKey({
                    columnNames: ["user_id"],
                    referencedColumnNames: ["id"],
                    referencedTableName: "users",
                    onDelete: "CASCADE"
                }),
                new TableForeignKey({
                    columnNames: ["company_id"],
                    referencedColumnNames: ["id"],
                    referencedTableName: "companies",
                    onDelete: "CASCADE"
                }),
                new TableForeignKey({
                    columnNames: ["currency_id"],
                    referencedColumnNames: ["id"],
                    referencedTableName: "currencies",
                    onDelete: "CASCADE"
                }),
                new TableForeignKey({
                    columnNames: ["payment_type_id"],
                    referencedColumnNames: ["id"],
                    referencedTableName: "payment_types",
                    onDelete: "CASCADE"
                }),
                new TableForeignKey({
                    columnNames: ["location_id"],
                    referencedColumnNames: ["id"],
                    referencedTableName: "locations",
                    onDelete: "CASCADE"
                }),
                new TableForeignKey({
                    columnNames: ["job_type_id"],
                    referencedColumnNames: ["id"],
                    referencedTableName: "job_types",
                    onDelete: "CASCADE"
                }),
                new TableForeignKey({
                    columnNames: ["level_id"],
                    referencedColumnNames: ["id"],
                    referencedTableName: "levels",
                    onDelete: "CASCADE"
                })
            ]
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("jobs");
    }

}
