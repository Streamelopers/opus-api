import { query } from "express";
import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateLocationTable1611423243717 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "locations",
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
                    name: "latitude",
                    type: "varchar",
                    
                },
                {
                    name: "longitude",
                    type: "varchar",
                    
                },
                {
                    name: "createdat",
                    type: "datetime",
                    
                },
                {
                    name: "updatedat",
                    type: "datetime",
                    
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
        await queryRunner.dropTable("locations");
    }
}
