// models/Task.js

const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
  createdAt: { type: Date, default: Date.now },
  status: String,
});

module.exports = mongoose.model('Task', taskSchema);
