const prisma = require('../config/prisma');

exports.addScore = async (data) => {
  return prisma.score.create({
    data,
  });
};

exports.getScores = async () => {
  return prisma.score.findMany({
    include: {
      student: true,
    },
  });
};