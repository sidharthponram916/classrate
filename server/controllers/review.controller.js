const Review = require('../models/Review.js'); 

module.exports = { 
    async createReview(req, res) { 
        try { 
          const review = await Review.create(req.body); 

          res.status(200).json(review); 
        }
        catch (e) { 
             res.status(500).json({ "error": `${e.message}`}); 
        }
    }, 
    async getAllReviews(req,res) { 
        try { 
            const reviews = await Review.find(); 

            res.status(200).json(reviews); 
        }
        catch (e) { 
            res.status(500).json({"error": `${e.message}`})
        }
    }
}