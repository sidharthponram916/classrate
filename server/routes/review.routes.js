const reviewController = require('../controllers/review.controller'); 

const { Router } = require('express'); 
const router = Router(); 


router.get('/all', reviewController.getAllReviews); 
router.get('/get/:id', reviewController.getReview); 

router.use(require('../middleware/verify')); 

router.post('/create', reviewController.createReview); 

module.exports = router; 