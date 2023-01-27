
import { Document } from 'mongoose';

export interface Potato extends Document {
  readonly name: string;
  readonly color: string;
  readonly weight: number;
}
