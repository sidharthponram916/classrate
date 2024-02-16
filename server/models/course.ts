import { Document, model, Schema } from "mongoose";

export interface Course extends Document {
    name: string;
    category: string;
    school_id: string; 
    other?: Object,
    ratings?: Array<number>;
};

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

export default model<Course>('courses', courseSchema);
