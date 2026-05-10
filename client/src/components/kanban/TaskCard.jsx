import { Draggable } from '@hello-pangea/dnd';
import { getPriorityClass, getInitials, truncate } from '../../utils/helpers';
import { formatDueDate, getDueDateClass } from '../../utils/formatDate';

const priorityIcons = { high: '🔴', medium: '🟡', low: '🟢' };

const TaskCard = ({ task, index, onEdit, onDelete }) => {
  const dueDateLabel = formatDueDate(task.dueDate);
  const dueDateClass = getDueDateClass(task.dueDate);

  return (
    <Draggable draggableId={task._id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`task-card ${getPriorityClass(task.priority)} ${snapshot.isDragging ? 'dragging' : ''}`}
        >
          {/* Header: title + action buttons */}
          <div className="task-card-header">
            <h3 className="task-title">{task.title}</h3>
            <div className="task-actions">
              <button
                className="task-action-btn"
                onClick={(e) => { e.stopPropagation(); onEdit(task); }}
                title="Edit task"
              >✏️</button>
              <button
                className="task-action-btn danger"
                onClick={(e) => { e.stopPropagation(); onDelete(task._id); }}
                title="Delete task"
              >🗑️</button>
            </div>
          </div>

          {/* Description */}
          {task.description && (
            <p className="task-desc">{truncate(task.description, 90)}</p>
          )}

          {/* Meta: priority + due date */}
          <div className="task-meta">
            <span className={`badge badge-priority-${task.priority}`}>
              {priorityIcons[task.priority]} {task.priority}
            </span>
            {dueDateLabel && (
              <span className={`badge badge-due ${dueDateClass}`}>
                📅 {dueDateLabel}
              </span>
            )}
          </div>

          {/* Assignee */}
          {task.assignedTo && (
            <div className="task-assignee">
              <div className="assignee-avatar">
                {getInitials(task.assignedTo.name)}
              </div>
              <span className="assignee-name">{task.assignedTo.name}</span>
            </div>
          )}
        </div>
      )}
    </Draggable>
  );
};

export default TaskCard;
