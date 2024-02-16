import { Schema, model, Document } from 'mongoose'; 

// Define the School interface
export interface School extends Document {
    name: string;
    url: string;
    website: string;
    state: string;
    city: string;
    search_terms?: string;
    color?: string;
    district?: string;
    principal?: string
    address: string;
    other?: Object;
}

// Create the School schema
const schoolSchema = new Schema<School>({ 
     name: { 
        type: String, 
        required: true
     },
     url: { 
       type: String, 
       required: true   
     },
     website: { 
       type: String, 
       default: ""
     },
     state: { 
        type: String, 
        required: true,
     }, 
     city: { 
        type: String, 
        required: true
     },
     search_terms: { 
        type: String, 
        default: ""
     }, 
     color: { 
        type: String, 
        default: "white"
     },
     district: { 
        type: String, 
        default: ""
     }, 
     principal: { 
        type: String, 
        default: ""
     },
     address: { 
        type: String, 
        required: true,
     }, 
     other: { 
        type: Object, 
        default: {}
     }
})

// Export the School model
export default model<School>('schools', schoolSchema); 