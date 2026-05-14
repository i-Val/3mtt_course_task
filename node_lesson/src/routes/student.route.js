const express = require('express');
const router = express.Router();

const studentController = require('../controllers/student.controller');

router.post('/', studentController.createStudent);
router.get('/', studentController.getStudents);

module.exports = router;