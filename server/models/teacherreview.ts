import { Document, model, Schema } from 'mongoose';

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

export default model<TeacherReview>('teacher_reviews', teacherReviewSchema);