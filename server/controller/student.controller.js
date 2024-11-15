const Student = require("../model/student.model");
const Response = require("../utils/response");

const getStudents = async (req, res) => {
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
};

const searchStudent = async (req, res) => {
  //   const student = await Student.findById(req.params.id);

  const student = await Student.findOne({ _id: req.params.id });

  console.log(student);

  if (student) {
    return Response(res, 200, true, `Student ID is ${req.params.id}`, student);
  } else {
    return Response(
      res,
      500,
      false,
      `Can't find student..!\nEntered Student ID is ${req.params.id}`,
      null
    );
  }
};

const saveStudent = async (req, res) => {
  const body = req.body;

  const isEmailChecked = await Student.find({ email: body.email });
  console.log(isEmailChecked.length);

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
};

const updateStudent = async (req, res) => {
  const studentId = req.params.id;
  const body = req.body;
  const user = await Student.findById(studentId);

  if (user) {
    user.firstName = body.firstName;
    user.lastName = body.lastName;
    user.email = body.email;
    user.mobileNumber = body.mobileNumber;
    user.degree = body.degree;

    const updateStudent = await Student.findOneAndUpdate(
      { _id: studentId },
      user
    );

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
};

const deleteStudent = async (req, res) => {
  const searchStudent = await Student.findOne({ _id: req.params.id });

  if (searchStudent) {
    searchStudent.isActive = false
    const deleteStudent = await Student.findByIdAndUpdate(req.params.id, searchStudent);
    return Response(
      res,
      200,
      true,
      `Deleted Student ID is ${req.params.id}`,
      deleteStudent
    );
  } else {
    return Response(
      res,
      500,
      false,
      `Can not find Student ID ${req.params.id}`,
      null
    );
  }
};

module.exports = {
  getStudents,
  searchStudent,
  saveStudent,
  updateStudent,
  deleteStudent,
};
