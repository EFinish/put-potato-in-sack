import {IsNotEmpty } from 'class-validator';

export class CreateSackDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  color: string;
}
  