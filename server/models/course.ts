import { Document, model, Schema } from "mongoose";

// Define the Course interface
export interface Course extends Document {
	name: string;
	category: string;
	school_id: string;
	other?: Object,
	ratings?: Array<number>;
};

// Create the Course schema
const courseSchema = new Schema<Course>({
	name: {
		type: String,
		required: true,
	},
	category: {
		type: String,
		required: true
	},
	school_id: {
		type: String,
		required: true,
	},
	other: {
		type: Object,
		default: {}
	},
	ratings: {
		type: Array,
		default: []
	}
});

// Export the Course model
export default model<Course>('courses', courseSchema);