export class CreateTodoDto {
  name: string;
  description: string;
  status: boolean;

  constructor(name: string, description: string, status: boolean) {
    this.name = name;
    this.description = description;
    this.status = status;
  }

  public getName(): string {
    return this.name;
  }

  public getDescription(): string {
    return this.description;
  }

  public getStatus(): boolean {
    return this.status;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public setDescription(description: string): void {
    this.description = description;
  }

  public setStatus(status: boolean): void {
    this.status = status;
  }

  public toObject(): any {
    return {
      name: this.name,
      description: this.description,
      status: this.status,
    };
  }

  public static fromObject(obj: any): CreateTodoDto {
    return new CreateTodoDto(obj.name, obj.description, obj.status);
  }
}
