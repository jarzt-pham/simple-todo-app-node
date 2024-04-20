import {
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Todo {
  @PrimaryColumn()
  @Generated('uuid')
  id: string;

  @Column('varchar')
  name: string;

  @Column('varchar', { nullable: true })
  description: string;

  @Column('boolean', { default: true })
  status: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn({})
  updated_at: Date;

  create({ name, description }: { name: string; description?: string }) {
    this.name = name;
    this.description = description;
    this.status = true;

    return this;
  }

  edit({ name, description }: { name: string; description?: string }) {
    this.name = name;
    this.description = description;

    return this;
  }

  changeStatus(status: boolean = true) {
    this.status = status;

    return this;
  }
}
