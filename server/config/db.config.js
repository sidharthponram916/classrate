const mongoose = require('mongoose'); 

const connect = async () =>  {

await mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }, () => { 
    try { 
     console.log("Database has started"); 
    }
    catch (e) { 
        console.log("There was an error: " + e.message); 
    }
})

}


module.exports = connect; 