const express = require('express');

const studentRoutes = require('./routes/studentRoutes');
const scoreRoutes = require('./routes/scoreRoutes');

const app = express();

app.use(express.json());

app.use('/students', studentRoutes);
app.use('/scores', scoreRoutes);