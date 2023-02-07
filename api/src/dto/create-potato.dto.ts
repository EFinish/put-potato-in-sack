import {IsNotEmpty, IsNumber } from 'class-validator';

export class CreatePotatoDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  color: string;

  @IsNumber()
  weight: number;
}
  