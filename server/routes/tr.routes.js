const trController = require('../controllers/tr.controller'); 

const { Router } = require('express'); 
const router = Router(); 


router.get('/all', trController.getAllReviews); 
router.get('/get/:id', trController.getReviewById); 

router.use(require('../middleware/verify')); 

router.post('/create', trController.createReview); 
router.delete('/delete/:id', trController.deleteReviewById); 

module.exports = router;   