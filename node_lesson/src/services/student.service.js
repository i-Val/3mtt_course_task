const prisma = require('../config/prisma');

exports.createStudent = async (data) => {
  return prisma.user.create({
    data
  })
}