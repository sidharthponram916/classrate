const { Schema, model } = require('mongoose'); 

const schoolSchema = new Schema({ 
     name: { 
        type: String, 
        required: true
     },
     state: { 
        type: String, 
        required: true,
     }, 
     city: { 
        type: String, 
        required: true
     },
     address: { 
        type: String, 
        required: true,
     }
})

module.exports = model('school', schoolSchema); 