const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { Course, Task } = require('./models');

module.exports = {
    Course,
    Task,
};

const app = express();
const port = 7000;

// Middleware
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/student_tasks', { useNewUrlParser: true, useUnifiedTopology: true });

// Define routes
app.get('/', (req, res) => {
  res.send('Welcome to the Task Manager App!');
});

app.post('/', (req, res) => {
  const postData = req.body;
  res.status(200).json({ message: 'POST request received successfully', data: postData });
});

app.use('/courses/:courseId/tasks', require('./routes/tasks'));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
