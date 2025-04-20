const router = require("express").Router();
const teacherRoute = require("./teacher.routes");
const studentRoute = require("./students.routes");
const groupRoute = require("./groups.routes");
const aboutRoute = require("./about.routes");
const postRouter = require("./posts.routes");
const commentsRouter = require("./comments.routes");

router.use(teacherRoute);
router.use(studentRoute);
router.use(groupRoute);
router.use(aboutRoute);
router.use(postRouter)
router.use(commentsRouter)

module.exports = router;
