const { Schema, model } = require('mongoose'); 


const teacherReviewSchema = new Schema({ 
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
         required: true
      }, 
      engagement: { 
          type: String, 
          required: true 
      },
      tests: { 
          type: String, 
          required: true
      },
      overall: { 
         type: String, 
         required: true,
      },
      desc: { 
         type: String, 
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

module.exports = model('teacher_reviews', teacherReviewSchema); 