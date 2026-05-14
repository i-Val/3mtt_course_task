const scoreService = require('../services/score.service');

exports.addScore = async (req, res) => {
  try {
    const score = await scoreService.addScore(req.body);

    res.status(201).json({
      message: 'Score added',
      data: score,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

exports.getScores = async (req, res) => {
  try {
    const scores = await scoreService.getScores();

    res.json({
      data: scores,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};