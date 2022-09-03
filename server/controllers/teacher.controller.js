const Teacher = require('../models/Teacher.js'); 

module.exports = { 
     async createTeacher(req, res) { 
         try { 
             let teacher = await Teacher.create(req.body); 

             res.status(200).json(teacher); 
         }
         catch (e) { 
             res.status(500).json({ "error": e.message})
         }
     }, 
     async getAllTeachers(req,res) { 
        try { 
            const teachers = await Teacher.find(); 

            res.status(200).json(teachers);
        }
        catch (e) { 
            res.status(404).json({ "error": e.message})
        }
     }, 
     async getTeacherById(req, res) { 
        try { 
            const teacher = await Teacher.findById(req.params.id)

            res.status(200).json(teacher);
        }
        catch (e) { 
            res.status(404).json({ "error": e.message}); 
        }
     }, 
     async deleteTeacherById(req, res) { 
        try { 
            const teacher = await Teacher.findByIdAndDelete(req.params.id); 

            res.status(200).json(teacher); 
        }
        catch (e) { 
            res.status(404).json({ "error": e.message}); 
        }
     }
}