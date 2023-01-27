
import { Document } from 'mongoose';

export interface Sack extends Document {
  readonly name: string;
  readonly color: string;
}
