
import { Document, ObjectId } from 'mongoose';

export interface Potato extends Document {
  readonly name: string;
  readonly color: string;
  readonly weight: number;
  readonly sack_id: string;
}
