const reviewController = require('../controllers/review.controller'); 

const { Router } = require('express'); 
const router = Router(); 

router.post('/create', reviewController.createReview); 
router.get('/all', reviewController.getAllReviews); 

module.exports = router; 