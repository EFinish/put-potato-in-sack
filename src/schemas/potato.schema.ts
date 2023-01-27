
import { Schema } from 'mongoose';


export const PotatoSchema = new Schema({
    name: String,
    color: String,
    weight: Number,
    sack_id: { type: Schema.Types.ObjectId, ref: 'sacks' },
});
