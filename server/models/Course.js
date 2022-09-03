const { Schema, model } = require('mongoose'); 

const courseSchema = new Schema({ 
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
})

module.exports = model("courses", courseSchema); 