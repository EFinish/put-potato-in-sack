import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Potato } from '../interfaces/potato.interface';
import { CreatePotatoDto } from '../dto/create-potato.dto';

@Injectable()
export class PotatoService {
  constructor(
    @Inject('POTATO_MODEL')
    private potatoModel: Model<Potato>,
  ) {}

  async create(createPotatoDto: CreatePotatoDto): Promise<Potato> {
    const createdPotato = new this.potatoModel(createPotatoDto);
    return createdPotato.save();
  }

  async findAll(): Promise<Potato[]> {
    return this.potatoModel.find().exec();
  }

  putPotatoInSack(): string {
    return 'Hello World!';
  }
}
