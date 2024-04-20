import { IsBoolean, IsOptional } from 'class-validator';

export class ChangeStatusTodoDto {
  @IsOptional()
  @IsBoolean()
  status: boolean;
}
