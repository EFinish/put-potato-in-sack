import { Test, TestingModule } from '@nestjs/testing';
import { PotatoController } from './potato.controller';
import { PotatoService } from '../services/potato.service';

describe('PotatoController', () => {
  let potatoController: PotatoController;

  beforeEach(async () => {
    const potato: TestingModule = await Test.createTestingModule({
      controllers: [PotatoController],
      providers: [PotatoService],
    }).compile();

    potatoController = potato.get<PotatoController>(PotatoController);
  });

  describe('root', () => {
    // it('should return "Hello World!"', () => {
    //   expect(potatoController.getHello()).toBe('Hello World!');
    // });
    // TODO
  });
});
