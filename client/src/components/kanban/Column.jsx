import { Droppable } from '@hello-pangea/dnd';
import TaskCard from './TaskCard';

const columnConfig = {
  todo:        { label: 'To-Do',       dotClass: 'col-dot-todo',     accent: 'var(--col-todo)' },
  in_progress: { label: 'In Progress', dotClass: 'col-dot-progress', accent: 'var(--col-progress)' },
  done:        { label: 'Done',        dotClass: 'col-dot-done',     accent: 'var(--col-done)' },
};

const Column = ({ status, tasks, onEdit, onDelete, onAddTask }) => {
  const config = columnConfig[status];

  return (
    <div className="column">
      {/* Column Header */}
      <div className="column-header">
        <div className="column-title-wrap">
          <span className={`column-dot ${config.dotClass}`} />
          <span className="column-title">{config.label}</span>
          <span className="column-count">{tasks.length}</span>
        </div>
        {status === 'todo' && (
          <button
            className="btn btn-ghost btn-sm btn-icon"
            onClick={onAddTask}
            title="Add task"
            style={{ fontSize: 18 }}
          >+</button>
        )}
      </div>

      {/* Droppable area */}
      <Droppable droppableId={status}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="column-tasks"
            style={{
              minHeight: 60,
              background: snapshot.isDraggingOver
                ? `linear-gradient(135deg, ${config.accent}10, transparent)`
                : 'transparent',
              borderRadius: 8,
              transition: 'background 0.2s ease',
              padding: snapshot.isDraggingOver ? 4 : 0,
            }}
          >
            {tasks.length === 0 && !snapshot.isDraggingOver ? (
              <div className="column-empty">
                <span className="column-empty-icon">
                  {status === 'todo' ? '📝' : status === 'in_progress' ? '⚙️' : '✅'}
                </span>
                <span>No tasks yet</span>
                {status === 'todo' && (
                  <button className="btn btn-secondary btn-sm" onClick={onAddTask}>
                    + Add Task
                  </button>
                )}
              </div>
            ) : (
              tasks.map((task, index) => (
                <TaskCard
                  key={task._id}
                  task={task}
                  index={index}
                  onEdit={onEdit}
                  onDelete={onDelete}
                />
              ))
            )}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Column;
