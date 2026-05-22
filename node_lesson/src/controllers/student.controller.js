const studentService = require('../services/student.service');

exports.createStudent = async (req, res) => {
  try {
    const student = await studentService.createStudent(req.body);

    res.status(201).json({
      message: 'Student create',
      data: student
    });
  }catch (error) {
    res.status(500).json({
      error: error.message
    })
  }
};
