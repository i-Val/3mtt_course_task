const prisma = require('../config/prisma');

exports.createStudent = async (data) => {
  return prisma.student.create({
    data,
  });
};

exports.getStudents = async () => {
  return prisma.student.findMany({
    include: {
      scores: true,
    },
  });
};