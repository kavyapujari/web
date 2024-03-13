const mongoose = require('mongoose');

// Course Schema
const courseSchema = new mongoose.Schema({
  courseId: String,
  courseName: String,
});

// Task Schema
const taskSchema = new mongoose.Schema({
  courseId: String,
  taskName: String,
  dueDate: Date,
  additionalDetails: String,
});

const Course = mongoose.model('Course', courseSchema);
const Task = mongoose.model('Task', taskSchema);

module.exports = { Course, Task };


