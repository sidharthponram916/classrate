const User = require('../models/User'); 
const jwt = require('jsonwebtoken'); 

module.exports = (req,res, next) => { 
    const token = req.headers.authorization;     
    if (!token) return res.status(401).json({error: "Access Denied! Authenticate!"}); 

    jwt.verify(token, process.env.JWT_KEY, async (err, payload) => { 
    try { 
       if (err) return res.status(400).json({error: "Invalid Token."}); 

       const user = await User.findById(payload.id); 
       if (!user) return res.status(401).json({error: "You are not this user. Invalid token!"}); 

       req.user = user; 

       next(); 
    }
    catch (e) { 
        res.status(500).json({error: e.message}); 
        console.log(e.message); 
    }
    })
}