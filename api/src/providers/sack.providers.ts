
import { Connection } from 'mongoose';
import { SackSchema } from '../schemas/sack.schema';

export const sacksProviders = [
  {
    provide: 'SACK_MODEL',
    useFactory: (connection: Connection) => connection.model('Sack', SackSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
