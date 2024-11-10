const express = require("express");
const Student = require("../model/student.model");
const Response = require("../utils/response");
const StudentRouter = express.Router();

/**
 * @swagger
 * /api/v1/student/register:
 *   post:
 *     summary: Register a new student
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               email:
 *                 type: string
 *               mobileNumber:
 *                 type: array
 *                 items:
 *                   type: string
 *               degree:
 *                 type: string
 *               isActive:
 *                 type: boolean
 *     responses:
 *       201:
 *         description: Student successfully registered
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */

StudentRouter.post("/register", async (req, res) => {
  const body = req.body;

  const isEmailChecked = await Student.find({ email: body.email });

  if (isEmailChecked.length > 0) {
    return Response(res, 400, false, "Already save this email..!", body.email);
  }

  const newBody = {
    firstName: body.firstName,
    lastName: body.lastName,
    email: body.email,
    mobileNumber: body.mobileNumber,
    degree: body.degree,
  };

  //   const newStudent = new Student(newBody);
  //   const createdStudent = await newStudent.save(newBody);

  const createdStudent = await Student.create(newBody);

  if (createdStudent) {
    // return res.send({
    //   isSuccess: true,
    //   code: 201,
    //   message: "User created..!",
    //   data: createdStudent,
    // });
    return Response(res, 201, true, "User created..!", newBody);
  } else {
    // return res.send({
    //   isSuccess: false,
    //   code: 500,
    //   message: "Internal server error..!",
    //   data: createdStudent,
    // });
    return Response(res, 500, false, "Internal server error..!", newBody);
  }
});

/**
 * @swagger
 * /api/v1/student/get-all:
 *   get:
 *     summary: Get all students
 *     responses:
 *       200:
 *         description: Successfully retrieved all students
 *         content:
 *           application/json:
 *             schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               email:
 *                 type: string
 *               mobileNumber:
 *                 type: array
 *                 items:
 *                   type: string
 *               degree:
 *                 type: string
 *               isActive:
 *                 type: boolean
 *       404:
 *         description: No students found
 *       500:
 *         description: Internal server error
 */
StudentRouter.get("/get-all", async (req, res) => {
  try {
    const allStudent = await Student.find();

    if (allStudent.length > 0) {
      return Response(res, 200, true, "Get all students..!", allStudent);
    } else {
      return Response(res, 404, false, "No users found in table..!", null);
    }
  } catch (error) {
    return Response(res, 500, false, "Internal server error..!", error.message);
  }
});

StudentRouter.get("/get-student/:id", async (req, res) => {
  //   const student = await Student.findById(req.params.id);

  const student = await Student.findOne({ _id: req.params.id });

  console.log(student);

  if (student) {
    return Response(res, 200, true, `Student ID is ${req.params.id}`, student);
  }
});

StudentRouter.put("/update-student/:id", async (req, res) => {
  const studentId = req.params.id;
  const response = req.body;
  const student = await Student.findOne({ _id: studentId });

  if (student) {
    student.firstName = response.firstName;
    student.lastName = response.lastName;
    student.degree = response.degree;

    // const updateStudent = await student.save();
    const updateStudent = await Student.findByIdAndUpdate(studentId, student);
    return Response(
      res,
      201,
      true,
      `Update Student ID is ${studentId}`,
      updateStudent
    );
  } else {
    return Response(
      res,
      500,
      false,
      `Can not find Student ID ${req.params.id}`,
      updateStudent
    );
  }
});

StudentRouter.delete("/delete-student/:id", async (req, res) => {
  const studentId = req.params.id;
  const student = await Student.findById(studentId);
  console.log(studentId);

  if (student) {
    const deleteStudent = await Student.findByIdAndDelete(studentId);
    return Response(
      res,
      200,
      true,
      `Deiete Student ID is ${studentId}`,
      deleteStudent
    );
  } else {
    return Response(res, 500, false, `Internal Server Error...!`, null);
  }
});

module.exports = StudentRouter;
