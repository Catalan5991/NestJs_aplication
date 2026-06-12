import {IsInt,IsString,Max,Min, IsOptional} from 'class-validator';

export class UpdateStudentDto {
  @IsOptional()
  @IsString()
  Name?: string;

  @IsOptional()
  @IsString()
  enrollment?: string;

  @IsOptional()
  @IsString()
  career?: string;

  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(3)
  quarter?: number;
}