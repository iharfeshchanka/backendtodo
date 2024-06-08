import { IsString, IsDateString, IsBoolean } from 'class-validator';

export class CreateTodoDto {
  @IsString()
  readonly todo: string;
  @IsDateString()
  readonly dueDate: Date;
  @IsBoolean()
  readonly isCompleted: boolean;
}
