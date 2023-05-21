const courseController = require("../controllers/course.controller");

const { Router } = require("express");
const router = Router();

router.get("/all", courseController.getAllCourses);
router.get("/get/:school_id/:course", courseController.getCourse);
router.get("/getbyid/:id", courseController.getCourseById);

router.use(require("../middleware/verify"));

router.post("/create", courseController.createCourse);
router.put("/update/:id", courseController.updateCourse);
router.delete("/delete/:id", courseController.deleteCourse);

module.exports = router;
