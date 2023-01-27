import { Injectable } from '@nestjs/common';

@Injectable()
export class PotatoService {
  createPotato(): string {
    return 'Hello World!';
  }

  getPotatos(): string {
    return 'Hello World!';
  }

  putPotatoInSack(): string {
    return 'Hello World!';
  }
}
