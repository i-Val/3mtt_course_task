const studentService = require('../services/student.service');

exports.createStudent = async (req, res) => {
  try {
    const student = await studentService.createStudent(req.body);

    res.status(201).json({
      message: 'Student created',
      data: student,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

exports.getStudents = async (req, res) => {
  try {
    const students = await studentService.getStudents();

    res.json({
      data: students,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};