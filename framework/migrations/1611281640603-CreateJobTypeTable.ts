import { query } from "express";
import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateJobTypeTable1611281640603 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "job_types",
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
                    name: "created_at",
                    type: "timestamp",
                    
                },
                {
                    name: "updated_at",
                    type: "timestamp",
                    
                },
                {
                    name: "deleted_at",
                    type: "timestamp",
                    isNullable: true
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("job_types");
    }

}
