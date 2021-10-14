import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddApplicationTargetToJobTable1617668302366
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "jobs",
      new TableColumn({
        name: "application_target",
        type: "varchar",
        default: "",
      })
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public async down(queryRunner: QueryRunner): Promise<void> {}
}
