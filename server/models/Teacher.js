const { Schema, model } = require('mongoose'); 

const teacher_schema = new Schema({ 
     name: { 
         type: String, 
         required: true,
     }, 
     school: { 
          type: String, 
          required: true
     }, 
     school_id: { 
          type: String, 
          required: true
     },
     courses: { 
         type: Array, 
         default: []
     }, 
     ratings: { 
        type: Array, 
        default: []
     }
})

module.exports = model('teachers', teacher_schema); 