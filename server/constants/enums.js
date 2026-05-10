// ============================================================
// ENUMS - Centralized constants for task status and priority
// ============================================================

const TASK_STATUS = {
  TODO: 'todo',
  IN_PROGRESS: 'in_progress',
  DONE: 'done',
};

const TASK_PRIORITY = {
  LOW: 'low',
  MEDIUM: 'medium',
  HIGH: 'high',
};

const USER_ROLES = {
  ADMIN: 'admin',
  USER: 'user',
};

module.exports = { TASK_STATUS, TASK_PRIORITY, USER_ROLES };
