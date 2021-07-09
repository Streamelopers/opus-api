import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddApplicationTargetToJobTable1617668302366 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("jobs", new TableColumn({
            name: "application_target",
            type: "varchar",
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
