import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePaymentTypeTable1611281842597 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "payment_types",
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
        await queryRunner.dropTable("payment_types");
    }

}
