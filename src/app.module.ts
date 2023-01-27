import { Module } from '@nestjs/common';
import { PotatoController } from './controllers/potato.controller';
import { PotatoService } from './services/potato.service';

@Module({
  imports: [],
  controllers: [PotatoController],
  providers: [PotatoService],
})
export class AppModule {}
