const express = require("express");

const StudentRouter = express.Router();
const {
  getStudents,
  searchStudent,
  saveStudent,
  updateStudent,
  deleteStudent,
} = require("../controller/student.controller");

StudentRouter.post("/register", saveStudent);

StudentRouter.get("/get-all", getStudents);

StudentRouter.get("/get-student/:id", searchStudent);

StudentRouter.put("/update-student/:id", updateStudent);

StudentRouter.put("/delete-student/:id", deleteStudent);

module.exports = StudentRouter;
