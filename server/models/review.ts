import { Schema, model, Document } from 'mongoose';

// Define the Review interface
export interface Review extends Document {
    username: string;
    user_id: string;
    course: string;
    school: string;
    school_id: string;
    instructor?: string;
    grade?: string;
    year: string;
    desc: string;
    curriculum: number;
    difficulty: number;
    type: string;
    workload: number;
    instructorRating: number;
    overall: number;
    upvotes?: string[];
    createdAt: Date;
};

// Create the Review schema
const reviewSchema = new Schema<Review>({
    username: {
        type: String,
        required: true
    },
    user_id: {
        type: String,
        required: true
    },
    course: {
        type: String,
        required: true
    },
    school: {
        type: String,
        required: true
    },
    school_id: {
        type: String,
        required: true
    },
    instructor: {
        type: String,
        default: "N/A"
    },
    grade: {
        type: String,
        default: "N/A"
    },
    year: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    curriculum: {
        type: Number,
        required: true,
    },
    difficulty: {
        type: Number,
        required: true,
    },
    type: {
        type: String,
        required: true
    },
    workload: {
        type: Number,
        required: true
    },
    instructorRating: {
        type: Number,
        required: true,
    },
    overall: {
        type: Number,
        required: true
    },
    upvotes: {
        type: Array<String>,
        default: []
    },
    createdAt: {
        type: Date,
        required: true
    }
})

// Export the Review model
export default model<Review>('reviews', reviewSchema);