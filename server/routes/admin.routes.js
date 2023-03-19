const { Router } = require("express");
const router = Router();

const Admin = require("../models/Admin.js");

router.use(require("../middleware/verify.js"));

router.get("/all", async (req, res) => {
  try {
    let admins = await Admin.find();

    res.status(200).json(admins);
  } catch (e) {
    res.status(500).json(e.message);
  }
});

module.exports = router;
