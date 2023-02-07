
import { Body, Controller, Get, HttpStatus, Param, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { CreateSackDto } from 'src/dto/create-sack.dto';
import { SackService } from '../services/sack.service';

@Controller('sack')
export class SackController {
constructor(private readonly sackService: SackService) {}
  @Get()
  findAll(@Res() res: Response){
    const result = this.sackService.findAll()

    res.status(HttpStatus.OK).json(result);
  }

  @Post()
  create(@Body() createSackDto: CreateSackDto, @Res() res: Response) {
    const result = this.sackService.create(createSackDto)

    res.status(HttpStatus.CREATED).send();
  }
}