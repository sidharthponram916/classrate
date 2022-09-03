const Course = require('../models/Course.js'); 

module.exports = { 
    async createCourse(req, res) { 
        try { 
            const course = await Course.create(req.body); 
  
            res.status(200).json(course); 
          }
          catch (e) { 
               res.status(500).json({ "error": `${e.message}`}); 
               console.log(e.message); 
        }
    }, 
    async getCourse(req,res) { 
        try {  
            const course = await Course.findOne({ 
                 $and: [{
                     school_id: req.params.school 
                 }, { 
                     name: req.params.course
                 }]
            }); 
   
            res.status(200).json(course); 
        }
        catch (e) { 
            res.status(404).json({ "error: ": `${e.message}`}); 
            console.log(e.message); 
        }
    },
    async getCourseById(req,res) { 
        try { 
            const course = await Course.findById(req.params.id); 
            res.status(200).json(course); 
        }
        catch (e) { 
            res.status(404).json({ "error": `${e.message}`}); 
        }
    }, 
    async getAllCourses(req,res) { 
        try { 
            const courses = await Course.find(); 

            res.status(200).json(courses); 
        }  
        catch (e) { 
            res.status(500).json({ "error: ": `${e.message}`}); 
        }
    }, 
    async updateCourse(req,res) { 
        try { 
            const course = await Course.findByIdAndUpdate(req.params.id, req.body); 

            res.status(200).json(course);  
        }
        catch (e) { 
            res.status(500).json({ "error: ": `${e.message}`}); 
        }
    }
}