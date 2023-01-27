import { isValidObjectId, Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Sack } from '../interfaces/sack.interface';
import { CreateSackDto } from 'src/dto/create-sack.dto';

@Injectable()
export class SackService {
  constructor(
    @Inject('SACK_MODEL')
    private sackModel: Model<Sack>,
  ) {}

  async create(createSackDto: CreateSackDto): Promise<Sack> {
    const createdPotato = new this.sackModel(createSackDto);
    return createdPotato.save();
  }

  async findAll(): Promise<Sack[]> {
    return this.sackModel.find().exec();
  }

  async doesSackExist(sackId: string): Promise<boolean> {
    if (!isValidObjectId(sackId)) { return false }

    const found = await this.sackModel.findById(sackId).exec();

    return found ? true : false
  }
}
