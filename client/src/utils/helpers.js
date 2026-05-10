/**
 * General helper utilities
 */

/**
 * Returns a CSS class string for a given task priority.
 * @param {string} priority - 'low' | 'medium' | 'high'
 * @returns {string} CSS class name
 */
export const getPriorityClass = (priority) => {
  const map = {
    low: 'priority-low',
    medium: 'priority-medium',
    high: 'priority-high',
  };
  return map[priority] || 'priority-medium';
};

/**
 * Returns a CSS class string for a given task status.
 * @param {string} status - 'todo' | 'in_progress' | 'done'
 */
export const getStatusClass = (status) => {
  const map = {
    todo: 'status-todo',
    in_progress: 'status-inprogress',
    done: 'status-done',
  };
  return map[status] || 'status-todo';
};

/**
 * Returns a human-readable label for a task status.
 * @param {string} status
 */
export const getStatusLabel = (status) => {
  const map = {
    todo: 'To-Do',
    in_progress: 'In Progress',
    done: 'Done',
  };
  return map[status] || status;
};

/**
 * Truncates a string to a given max length, appending '…' if truncated.
 * @param {string} str
 * @param {number} maxLen
 */
export const truncate = (str, maxLen = 80) => {
  if (!str) return '';
  return str.length > maxLen ? str.slice(0, maxLen) + '…' : str;
};

/**
 * Returns the user's initials from their name (up to 2 letters).
 * @param {string} name
 */
export const getInitials = (name = '') => {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
};
