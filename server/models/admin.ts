import { Document, model, Schema } from 'mongoose';

// Define the Admin interface
export interface Admin extends Document {
	user: string;
	date: Date;
}

// Define the Admin schema
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

// Export the Admin model
export default model<Admin>('admins', adminSchema);