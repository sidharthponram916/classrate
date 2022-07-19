require('dotenv').config(); 

const express = require('express'); 
const app = express(); 
const cors = require('cors'); 

const db = require('./config/db.config'); 

app.use(cors());

db();  

app.use(express.urlencoded({ extended: true}));
app.use(express.json()); 

app.get('/', (req,res) => { 
     res.send("Welcome to the ReviewMyCourse API"); 
})

app.use('/users', require("./routes/user.routes.js")); 
app.use('/reviews', require('./routes/review.routes.js'));
app.use('/schools', require('./routes/school.routes.js')); 

app.listen(process.env.PORT || 2022, () => { 
     console.log("ReviewMyCourse Server Up and Running!"); 
})