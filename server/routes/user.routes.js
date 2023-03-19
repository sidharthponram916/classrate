const { Router } = require("express");
const router = Router();

const controller = require("../controllers/user.controller");

router.post("/create", controller.createUser);
router.post("/login", controller.logIn);
router.get("/all", controller.getAllData);

router.use(require("../middleware/verify"));

router.get("/current", controller.getUserData);

router.post("/email", controller.sendEmail);
router.post("/verifyEmail", controller.verifyEmailToken)

router.put("/update", controller.updateData);

module.exports = router;
