import { Module } from '@nestjs/common';
import { SackController } from 'src/controllers/sack.controller';
import { potatosProviders } from 'src/providers/potato.providers';
import { sacksProviders } from 'src/providers/sack.providers';
import { PotatoController } from './controllers/potato.controller';
import { PotatoService } from './services/potato.service';
import { SackService } from './services/sack.service';
import { DatabaseModule } from './modules/database.module';
import { PotatoModule } from './modules/potato.module';

@Module({
  imports: [PotatoModule],
})
export class AppModule {}
