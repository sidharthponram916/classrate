const Review = require("../models/Review.js");
const isAdmin = require("../models/Admin.js");

module.exports = {
  async createReview(req, res) {
    try {
      const review = await Review.create(req.body);

      res.status(200).json(review);
    } catch (e) {
      res.status(500).json({ error: `${e.message}` });
    }
  },
  async getAllReviews(req, res) {
    try {
      const reviews = await Review.find();

      res.status(200).json(reviews);
    } catch (e) {
      res.status(500).json({ error: `${e.message}` });
    }
  },
  async getReview(req, res) {
    try {
      const review = await Review.findById(req.params.id);

      res.status(200).json(review);
    } catch (e) {
      res.status(500).json({ error: `${e.message}` });
    }
  },
  async updateReview(req, res) {
    try {
      if (!isAdmin(req.user._id))
        return res.status(403).json({ error: "Forbidden Request created!" });

      const review = await Review.findByIdAndUpdate(req.params.id, req.body);

      res.status(200).json(review);
    } catch (e) {
      res.status(500).json({ error: `${e.message}` });
    }
  },
  async deleteReview(req, res) {
    try {
      if (!isAdmin(req.user._id))
        return res.status(403).json({ error: "Forbidden Request created!" });
        
      const review = await Review.findByIdAndDelete(req.params.id);

      res.status(200).json(review);
    } catch (e) {
      res.status(500).json({ error: `${e.message}` });
    }
  },
};
