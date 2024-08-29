


const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    assignedTo: { type: String, required: true },
    startTime: { type: Date, default: null },
    endTime: { type: Date, default: null },
    status: { type: String, enum: ['assigned', 'in-progress', 'completed'], default: 'assigned' }
});

module.exports = mongoose.model('Task', TaskSchema);