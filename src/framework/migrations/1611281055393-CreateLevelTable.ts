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
        await queryRunner.dropTable("levels");
    }

}
