
import { Controller, Get, Post } from '@nestjs/common';
import { PotatoService } from '../services/potato.service';

@Controller('potato')
export class PotatoController {
constructor(private readonly potatoService: PotatoService) {}

  @Get()
  findAll(): string {
    return this.potatoService.getPotatos()
  }

  @Post()
  create(): string {
    return this.potatoService.createPotato()
  }

  @Post(':sack-id')
  putPotatoInSack(): string {
    return this.potatoService.putPotatoInSack()
  }
}