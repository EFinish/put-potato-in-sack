
import { Body, Controller, Get, HttpStatus, Param, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { CreatePotatoDto } from 'src/dtos/create-potato.dto';
import { PotatoService } from '../services/potato.service';

@Controller('potato')
export class PotatoController {
constructor(private readonly potatoService: PotatoService) {}

  @Get()
  findAll(@Res() res: Response){
    const result = this.potatoService.getPotatos()

    res.status(HttpStatus.OK).json(result);
  }

  @Post()
  create(@Body() createCatDto: CreatePotatoDto, @Res() res: Response) {
    const result = this.potatoService.createPotato();

    res.status(HttpStatus.CREATED).send();
  }

  @Post(':sack-id')
  putPotatoInSack(@Param('sack-id') id: string, @Res() res: Response) {
    const result = this.potatoService.putPotatoInSack()

    res.status(HttpStatus.OK).send();
  }
}