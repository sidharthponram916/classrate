const School = require('../models/School.js'); 

module.exports = { 
     async createSchool(req,res) { 
        try{ 
         const school = await School.create(req.body); 

         res.status(200).json(school); 
        }
        catch (e) { 
            res.status(500).json({ "error": `${e.message}`})
        }
     }, 
     async getAllSchools(req,res) { 
        try { 
            const schools = await School.find();
            res.status(200).json(schools);  
        }
        catch (e) { 
            res.status(500).json({ "error": e.message})
        }
     }, 
     async getSchool(req,res) { 
        try { 
           const school = await School.findById(req.params.id); 
           res.status(200).json(school); 
        }
        catch (e) { 
            res.status(500).json({"error": e.message}); 
        }
     }
}