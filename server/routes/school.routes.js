const schoolController = require('../controllers/school.controller'); 

const { Router } = require('express'); 
const router = Router(); 


router.get('/all', schoolController.getAllSchools); 
router.get('/get/:id', schoolController.getSchool); 

router.use(require('../middleware/verify')); 

router.post('/create', schoolController.createSchool); 

module.exports = router; 