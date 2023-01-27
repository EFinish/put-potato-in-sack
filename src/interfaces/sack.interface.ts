
import { Document, ObjectId } from 'mongoose';

export interface Sack extends Document {
  readonly name: string;
  readonly color: string;
}
