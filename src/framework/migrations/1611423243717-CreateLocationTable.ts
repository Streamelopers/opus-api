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
                    name: "isactive",
                    type: "boolean",
                    default: true
                },
                {
                    name: "name",
                    type: "varchar",
                    
                },
                {
                    name: "lat",
                    type: "varchar",
                    
                },
                {
                    name: "lon",
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
