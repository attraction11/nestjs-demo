import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  name: string;

  @IsNotEmpty()
  age: number;

  @IsString()
  password: string;
}
