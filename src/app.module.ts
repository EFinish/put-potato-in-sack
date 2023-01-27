import { Module } from '@nestjs/common';
import { PotatoModule } from './modules/potato.module';

@Module({
  imports: [PotatoModule],
})
export class AppModule {}
