import { Document, model, Schema } from 'mongoose';

export interface Admin extends Document {
	user: string;
	date: Date;
}

const adminSchema = new Schema<Admin>({
	user: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

export default model<Admin>('admins', adminSchema);
