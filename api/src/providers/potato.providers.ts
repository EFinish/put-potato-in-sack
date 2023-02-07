
import { Connection } from 'mongoose';
import { PotatoSchema } from '../schemas/potato.schema';

export const potatosProviders = [
  {
    provide: 'POTATO_MODEL',
    useFactory: (connection: Connection) => connection.model('Potato', PotatoSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
