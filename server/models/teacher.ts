import { Document, model, Schema } from 'mongoose';

interface Teacher extends Document {
    name: string;
    school: string;
    school_id: string;
    courses?: string[];
    ratings?: number[];
}

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

export default model<Teacher>('teachers', teacherSchema);