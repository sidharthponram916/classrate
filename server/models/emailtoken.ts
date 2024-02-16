import { Document, model, Schema, Types } from 'mongoose';

export interface Token extends Document {
    userId: Types.ObjectId;
    token: string;
    createdAt?: Date;
}

const tokenSchema = new Schema<Token>({
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User',
        unique: true,
    },
    token: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 3600,
    },
});

export default model<Token>('tokens', tokenSchema);
