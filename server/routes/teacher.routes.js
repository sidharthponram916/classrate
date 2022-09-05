const teacherController = require('../controllers/teacher.controller'); 

const { Router } = require('express'); 
const router = Router(); 


router.get('/all', teacherController.getAllTeachers); 
router.get('/get/:id', teacherController.getTeacherById); 
router.get('/getbysan/:name/:school', teacherController.getTeacher); 

router.use(require('../middleware/verify')); 

router.post('/create', teacherController.createTeacher); 
router.put('/update/:id', teacherController.updateTeacherById);
router.delete('/delete/:id', teacherController.deleteTeacherById); 

module.exports = router;   