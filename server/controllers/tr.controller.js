const Review = require('../models/TeacherReview.js'); 

module.exports = { 
     async createReview(req, res) { 
         try { 
             let review = await Review.create(req.body); 

             res.status(200).json(review); 
         }
         catch (e) { 
             res.status(500).json({ "error": e.message})
         }
     }, 
     async getAllReviews(req,res) { 
        try { 
            const reviews = await Review.find(); 

            res.status(200).json(reviews);
        }
        catch (e) { 
            res.status(404).json({ "error": e.message})
        }
     }, 
     async getReviewById(req, res) { 
        try { 
            const review = await Review.findById(req.params.id)

            res.status(200).json(review);
        }
        catch (e) { 
            res.status(404).json({ "error": e.message}); 
        }
     }, 
     async deleteReviewById(req, res) { 
        try { 
            const review = await Review.findByIdAndDelete(req.params.id); 

            res.status(200).json(review); 
        }
        catch (e) { 
            res.status(404).json({ "error": e.message}); 
        }
     }
}