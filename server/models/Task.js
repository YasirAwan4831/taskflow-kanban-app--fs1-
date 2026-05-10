const mongoose = require('mongoose');
const { TASK_STATUS, TASK_PRIORITY } = require('../constants/enums');

/**
 * Task Schema
 * Represents a Kanban task with status, priority, due date, and assignee.
 */
const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Task title is required'],
      trim: true,
      minlength: [3, 'Title must be at least 3 characters'],
      maxlength: [100, 'Title cannot exceed 100 characters'],
    },
    description: {
      type: String,
      trim: true,
      maxlength: [500, 'Description cannot exceed 500 characters'],
      default: '',
    },
    status: {
      type: String,
      enum: Object.values(TASK_STATUS),
      default: TASK_STATUS.TODO,
    },
    priority: {
      type: String,
      enum: Object.values(TASK_PRIORITY),
      default: TASK_PRIORITY.MEDIUM,
    },
    dueDate: {
      type: Date,
      default: null,
    },
    // The user who created this task
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    // The user this task is assigned to
    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      default: null,
    },
    // Tags for optional categorization
    tags: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt automatically
  }
);

// Index for faster queries by status and createdBy
taskSchema.index({ status: 1, createdBy: 1 });

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;
