


const express = require('express');
const Task = require('../models/Task');
const router = express.Router();


router.post('/', async (req, res) => {
    try {
        const newTask = new Task(req.body);
        const savedTask = await newTask.save();
        res.status(200).json(savedTask);
    } catch (err) {
        res.status(500).json(err);
    }
});


router.get('/:assignedTo', async (req, res) => {
    try {
        const tasks = await Task.find({ assignedTo: req.params.assignedTo });
        res.status(200).json(tasks);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.put('/start/:id', async (req, res) => {
    try {
        const updatedTask = await Task.findByIdAndUpdate(
            req.params.id,
            { startTime: new Date(), status: 'in-progress' },
            { new: true }
        );
        res.status(200).json(updatedTask);
    } catch (err) {
        res.status(500).json(err);
    }
});


router.put('/stop/:id', async (req, res) => {
    try {
        const updatedTask = await Task.findByIdAndUpdate(
            req.params.id,
            { endTime: new Date(), status: 'completed' },
            { new: true }
        );
        res.status(200).json(updatedTask);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;