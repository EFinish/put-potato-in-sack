
import * as mongoose from 'mongoose';

export const SackSchema = new mongoose.Schema({
    name: String,
    color: String,
});
