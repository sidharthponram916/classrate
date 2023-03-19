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
        type: Array, 
        default: []
    },
    createdAt: { 
        type: Date, 
        required: true
    }
})

module.exports = model('reviews', reviewSchema); 