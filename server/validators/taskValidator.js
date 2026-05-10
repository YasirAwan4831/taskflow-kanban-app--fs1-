const { TASK_STATUS, TASK_PRIORITY } = require('../constants/enums');

/**
 * TASK VALIDATORS
 * Validates task-related request bodies.
 * Returns an array of error messages. Empty array = valid.
 */

/**
 * Validates the create task request body.
 * @param {object} body - req.body
 * @returns {string[]} Array of validation error messages
 */
const validateCreateTask = (body) => {
  const errors = [];
  const { title, status, priority, dueDate } = body;

  if (!title || title.trim().length < 3) {
    errors.push('Title must be at least 3 characters.');
  }

  if (title && title.trim().length > 100) {
    errors.push('Title cannot exceed 100 characters.');
  }

  if (status && !Object.values(TASK_STATUS).includes(status)) {
    errors.push(`Status must be one of: ${Object.values(TASK_STATUS).join(', ')}`);
  }

  if (priority && !Object.values(TASK_PRIORITY).includes(priority)) {
    errors.push(`Priority must be one of: ${Object.values(TASK_PRIORITY).join(', ')}`);
  }

  if (dueDate && isNaN(new Date(dueDate).getTime())) {
    errors.push('Due date must be a valid date.');
  }

  return errors;
};

/**
 * Validates the update task request body.
 * @param {object} body - req.body
 * @returns {string[]} Array of validation error messages
 */
const validateUpdateTask = (body) => {
  const errors = [];
  const { title, status, priority, dueDate } = body;

  if (title !== undefined && title.trim().length < 3) {
    errors.push('Title must be at least 3 characters.');
  }

  if (title !== undefined && title.trim().length > 100) {
    errors.push('Title cannot exceed 100 characters.');
  }

  if (status && !Object.values(TASK_STATUS).includes(status)) {
    errors.push(`Status must be one of: ${Object.values(TASK_STATUS).join(', ')}`);
  }

  if (priority && !Object.values(TASK_PRIORITY).includes(priority)) {
    errors.push(`Priority must be one of: ${Object.values(TASK_PRIORITY).join(', ')}`);
  }

  if (dueDate && isNaN(new Date(dueDate).getTime())) {
    errors.push('Due date must be a valid date.');
  }

  return errors;
};

module.exports = { validateCreateTask, validateUpdateTask };
