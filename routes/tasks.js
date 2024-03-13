// routes/tasks.js

const express = require('express');
const router = express.Router(); // Ensure that you create an instance of the Router

const { Task } = require('../models');

// Route to submit a task
router.post('/', (req, res) => {
    const { courseId, taskName, dueDate, additionalDetails } = req.body;

    // Validate required fields
    if (!courseId || !taskName || !dueDate) {
        return res.status(400).json({ error: 'Please provide courseId, taskName, and dueDate' });
    }

    const newTask = new Task({
        courseId,
        taskName,
        dueDate,
        additionalDetails,
    });

    newTask.save((err) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Error saving task' });
        } else {
            res.json({ message: 'Task submitted successfully' });
        }
    });
});

module.exports = router;
