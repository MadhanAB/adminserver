
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const db = require("./database/db");

app.use(express.json());
app.use(cors());


mongoose.connect('mongodb://localhost:27017/task-manager', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));


const tasksRoute = require('./routes/task');
app.use('/api/tasks', tasksRoute);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  db();
  console.log(`Server running on port ${PORT}`)
});