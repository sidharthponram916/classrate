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
    category: { 
        type: String, 
        required: true
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
        type: Number, 
        default: 0
    }, 
    downvotes: {
        type: Number, 
        default: 0
    }, 
    createdAt: { 
        type: String, 
        default: new Date().toLocaleDateString()
    }
})

module.exports = model('reviews', reviewSchema); 