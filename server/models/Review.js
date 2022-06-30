const { Schema, model } = require('mongoose'); 

const reviewSchema = new Schema({ 
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
    instructor: { 
        type: String, 
        default: "N/A"
    }, 
    grade: { 
        type: String, 
        default: "N/A"
    },
    subjects: { 
        type: String, 
        required: true
    }, 
    desc: { 
        type: String, 
        required: true
    }, 
    difficulty: { 
        type: Number, 
        required: true,
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
    createdAt: { 
        type: Date, 
        default: new Date()
    }
})

module.exports = model('reviews', reviewSchema); 