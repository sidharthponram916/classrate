const { Router } = require("express");
const router = Router();

const controller = require("../controllers/user.controller");

router.post("/create", controller.createUser);
router.post("/login", controller.logIn);
router.post("/googleauth", controller.logInWithGoogle);

router.post("/email_preset", controller.resetPassword);
router.put("/update_pwd", controller.changePassword);
router.post("/verifyEmail", controller.verifyEmailToken);

router.use(require("../middleware/verify"));

router.get("/current", controller.getUserData);
router.get("/all", controller.getAllData);

router.post("/email", controller.sendEmail);

router.put("/update", controller.updateData);

module.exports = router;
