
import * as mongoose from 'mongoose';

export const PotatoSchema = new mongoose.Schema({
    name: String,
    color: String,
    weight: Number,
});
