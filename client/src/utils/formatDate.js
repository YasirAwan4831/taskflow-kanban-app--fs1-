import { format, formatDistanceToNow, isPast, isToday, isTomorrow } from 'date-fns';

/**
 * Formats a date to a readable string: "May 5, 2026"
 * @param {string|Date} date
 */
export const formatDate = (date) => {
  if (!date) return 'No due date';
  return format(new Date(date), 'MMM d, yyyy');
};

/**
 * Returns relative time: "3 days ago", "in 2 hours"
 * @param {string|Date} date
 */
export const timeAgo = (date) => {
  if (!date) return '';
  return formatDistanceToNow(new Date(date), { addSuffix: true });
};

/**
 * Returns a human-friendly due date label with urgency context.
 * @param {string|Date} date
 */
export const formatDueDate = (date) => {
  if (!date) return null;
  const d = new Date(date);
  if (isToday(d)) return 'Due today';
  if (isTomorrow(d)) return 'Due tomorrow';
  if (isPast(d)) return `Overdue · ${format(d, 'MMM d')}`;
  return `Due ${format(d, 'MMM d, yyyy')}`;
};

/**
 * Returns CSS class based on due date urgency.
 * @param {string|Date} date
 */
export const getDueDateClass = (date) => {
  if (!date) return '';
  const d = new Date(date);
  if (isPast(d) && !isToday(d)) return 'due-overdue';
  if (isToday(d)) return 'due-today';
  return 'due-upcoming';
};
