import { Document, model, Schema } from 'mongoose';

// Define the TeacherReview interface
interface TeacherReview extends Document {
  name: string;
  school: string;
  reliance: string;
  engagement: string;
  tests: string;
  overall: string;
  desc: string;
  upvotes?: number;
  downvotes?: number;
  createdAt?: string;
}

// Create the TeacherReview schema
const teacherReviewSchema = new Schema<TeacherReview>({
  name: {
    type: String,
    required: true,
  },
  school: {
    type: String,
    required: true,
  },
  reliance: {
    type: String,
    required: true,
  },
  engagement: {
    type: String,
    required: true,
  },
  tests: {
    type: String,
    required: true,
  },
  overall: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  upvotes: {
    type: Number,
    default: 0,
  },
  downvotes: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: String,
    default: new Date().toLocaleDateString(),
  },
});

// Export the TeacherReview model
export default model<TeacherReview>('teacher_reviews', teacherReviewSchema);