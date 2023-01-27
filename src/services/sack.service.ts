import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Sack } from '../interfaces/sack.interface';
// import { CreatePotatoDto } from '../dto/create-potato.dto';

@Injectable()
export class SackService {
  constructor(
    @Inject('SACK_MODEL')
    private sackModel: Model<Sack>,
  ) {}

  async findAll(): Promise<Sack[]> {
    return this.sackModel.find().exec();
  }
}
