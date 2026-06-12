import {IsInt,IsNotEmpty,IsString,Max,Min} from 'class-validator';

export class CreateStudentDto {
  @IsString()
  @IsNotEmpty()
  Name: string;

  @IsString()
  @IsNotEmpty()
  enrollment: string;

  @IsString()
  @IsNotEmpty()
  career: string;

  @IsInt()
  @Min(1)
  @Max(3)
  quarter: number;
}