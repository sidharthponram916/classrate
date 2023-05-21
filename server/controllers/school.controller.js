const School = require("../models/School.js");
const isAdmin = require("../config/isAdmin.js");

module.exports = {
  async createSchool(req, res) {
    try {
      const school = await School.create(req.body);

      res.status(200).json(school);
    } catch (e) {
      res.status(500).json({ error: `${e.message}` });
    }
  },
  async getAllSchools(req, res) {
    try {
      const schools = await School.find();
      res.status(200).json(schools);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  },
  async getSchool(req, res) {
    try {
      const school = await School.findById(req.params.id);
      res.status(200).json(school);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  },
  async updateSchool(req, res) {
    try {
      if (!(await isAdmin(req.user._id)))
        return res.status(403).json({ error: "Forbidden Request created!" });

      const school = await School.findByIdAndUpdate(req.params.id, req.body);
      res.status(200).json(school);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  },
  // Moderator Action Only!!!
  async deleteSchool(req, res) {
    try {
      console.log(!isAdmin(req.user._id));
      if (!isAdmin(req.user._id))
        return res.status(403).json({ error: "Forbidden Request created!" });

      const school = await School.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: "Successful Delete!" });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  },
};
