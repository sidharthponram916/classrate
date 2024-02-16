import { Document, model, Schema } from 'mongoose';

// Define the Teacher interface
interface Teacher extends Document {
	name: string;
	school: string;
	school_id: string;
	courses?: string[];
	ratings?: number[];
}

// Create the Teacher schema
const teacherSchema = new Schema<Teacher>({
	name: {
		type: String,
		required: true,
	},
	school: {
		type: String,
		required: true,
	},
	school_id: {
		type: String,
		required: true,
	},
	courses: {
		type: Array,
		default: [],
	},
	ratings: {
		type: Array,
		default: [],
	},
});

// Export the Teacher model
export default model<Teacher>('teachers', teacherSchema);