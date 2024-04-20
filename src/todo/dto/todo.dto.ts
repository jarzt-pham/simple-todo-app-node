export class TodoDto {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly status: boolean;

  constructor({ id, name, description, status }: Partial<TodoDto>) {
    Object.assign(this, { id, name, description, status });
  }
}
