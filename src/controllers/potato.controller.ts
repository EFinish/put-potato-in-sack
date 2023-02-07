
import { Body, Controller, Get, HttpStatus, Param, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { ObjectId } from 'mongoose';
import { CreatePotatoDto } from 'src/dto/create-potato.dto';
import { SackService } from 'src/services/sack.service';
import { PotatoService } from '../services/potato.service';

@Controller('potato')
export class PotatoController {
constructor(private readonly potatoService: PotatoService, private readonly sackService: SackService) {}
  @Get()
  async findAll(@Res() res: Response){
    const result = await this.potatoService.findAll()

    res.status(HttpStatus.OK).json(result);
  }

  @Post()
  create(@Body() createPotatoDto: CreatePotatoDto, @Res() res: Response) {
    this.potatoService.create(createPotatoDto)

    res.status(HttpStatus.CREATED).send();
  }

  @Post(':potatoid/:sackid')
  async putPotatoInSack(@Param('potatoid') potatoId: string, @Param('sackid') sackId: string, @Res() res: Response) {
    const potatoExists = await this.potatoService.doesPotatoExist(potatoId);

    if (!potatoExists) {
      res.status(HttpStatus.BAD_REQUEST).send();
    }

    const sackExists = await this.sackService.doesSackExist(sackId)

    if (!sackExists) {
      res.status(HttpStatus.BAD_REQUEST).send();
    }

    this.potatoService.putPotatoInSack(potatoId, sackId)

    res.status(HttpStatus.OK).send();
  }
}