const {
  getTeachers,
  getTeacherById,
  getAddTeacher,
  postAddTeacher,
  deleteTeacherById,
  getEditTeacherById,
  putEditTeacherById,
} = require("../controllers/teacher.controller");

const router = require("express").Router();

router.get("/teachers", getTeachers);

// params, body, query
//CRUD Create-post, Read - get, Update - put, patch, Delete -
router.get("/teacher/:teacherId", getTeacherById);

router.get("/add-teacher", getAddTeacher);

router.post("/add-teacher", postAddTeacher);

router.delete("/teacher/:id", deleteTeacherById);

router.get("/edit-teacher/:id", getEditTeacherById);

router.put("/edit_teacher/:id", putEditTeacherById);

module.exports = router;
