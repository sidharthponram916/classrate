const { Schema, model } = require('mongoose'); 

const schoolSchema = new Schema({ 
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

module.exports = model('schools', schoolSchema); 