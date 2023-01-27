import { isValidObjectId, Model, ObjectId, Types } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Potato } from '../interfaces/potato.interface';
import { CreatePotatoDto } from '../dto/create-potato.dto';

@Injectable()
export class PotatoService {
  constructor(
    @Inject('POTATO_MODEL')
    private potatoModel: Model<Potato>,
  ) { }

  async create(createPotatoDto: CreatePotatoDto): Promise<Potato> {
    const createdPotato = new this.potatoModel(createPotatoDto);
    return createdPotato.save();
  }

  async findAll(): Promise<Potato[]> {
    return this.potatoModel.find().exec();
  }

  async doesPotatoExist(potatoId: string): Promise<boolean> {
    if (!isValidObjectId(potatoId)) { return false }

    const found = await this.potatoModel.findById(potatoId).exec();

    return found ? true : false
  }

  async putPotatoInSack(potatoId: string, sackId: string): Promise<void> {
    const objId = new Types.ObjectId(sackId);

    this.potatoModel.findByIdAndUpdate(potatoId, { $set: { sack_id: objId} }).exec();
  }
}
