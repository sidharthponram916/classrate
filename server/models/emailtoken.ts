import { Document, model, Schema, Types } from 'mongoose';

// Define the Token interface
export interface Token extends Document {
    userId: Types.ObjectId;
    token: string;
    createdAt?: Date;
}

// Create the Token schema
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

// Export the Token model
export default model<Token>('tokens', tokenSchema);
