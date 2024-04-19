import { MigrationInterface, QueryRunner, Table, TableOptions } from 'typeorm';

const tableStructure: TableOptions = {
  name: 'tbl_todo',
  columns: [
    {
      name: 'id',
      type: 'varchar',
      isPrimary: true,
    },
    {
      name: 'name',
      type: 'varchar',
    },
    {
      name: 'description',
      type: 'varchar',
    },
    {
      name: 'status',
      type: 'boolean',
    },
    {
      name: 'created_at',
      type: 'timestamp',
      default: 'now()',
    },
    {
      name: 'updated_at',
      type: 'timestamp',
      default: 'now()',
    },
  ],
};

export class TblTodo1713548288134 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table(tableStructure));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(tableStructure.name);
  }
}
