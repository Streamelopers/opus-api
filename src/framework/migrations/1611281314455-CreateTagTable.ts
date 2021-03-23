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
                    name: "is_active",
                    type: "boolean",
                    default: true
                },
                {
                    name: "name",
                    type: "varchar",
                    
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
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("tags");
    }
}
