import { useState, useEffect, useCallback } from 'react';
import { DragDropContext } from '@hello-pangea/dnd';
import toast from 'react-hot-toast';
import Column from './Column';
import { Loader } from '../common/Loader';
import TaskModal from './TaskModal';
import {
  fetchTasks,
  createTask,
  updateTask,
  moveTask,
  deleteTask,
} from '../../services/taskService';

const COLUMNS = ['todo', 'in_progress', 'done'];

const Board = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [filterPriority, setFilterPriority] = useState('');
  const [saving, setSaving] = useState(false);

  // ─── Load all tasks ────────────────────────────────────────────────────
  const loadTasks = useCallback(async () => {
    try {
      setLoading(true);
      const data = await fetchTasks(filterPriority ? { priority: filterPriority } : {});
      setTasks(data.tasks);
    } catch {
      toast.error('Failed to load tasks.');
    } finally {
      setLoading(false);
    }
  }, [filterPriority]);

  useEffect(() => { loadTasks(); }, [loadTasks]);

  // ─── Group tasks by status ─────────────────────────────────────────────
  const getColumnTasks = (status) => tasks.filter((t) => t.status === status);

  // ─── Drag-and-drop handler ────────────────────────────────────────────
  const onDragEnd = async (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) return;
    if (destination.droppableId === source.droppableId && destination.index === source.index) return;

    const newStatus = destination.droppableId;

    // Optimistic UI update
    setTasks((prev) =>
      prev.map((t) => (t._id === draggableId ? { ...t, status: newStatus } : t))
    );

    try {
      await moveTask(draggableId, newStatus);
      toast.success(`Moved to ${newStatus.replace('_', ' ')}`);
    } catch {
      toast.error('Failed to move task. Reverting...');
      loadTasks(); // Revert on failure
    }
  };

  // ─── Create / Update task ─────────────────────────────────────────────
  const handleSaveTask = async (formData) => {
    setSaving(true);
    try {
      if (editingTask) {
        const { task } = await updateTask(editingTask._id, formData);
        setTasks((prev) => prev.map((t) => (t._id === task._id ? task : t)));
        toast.success('Task updated!');
      } else {
        const { task } = await createTask(formData);
        setTasks((prev) => [task, ...prev]);
        toast.success('Task created!');
      }
      setModalOpen(false);
      setEditingTask(null);
    } catch (err) {
      toast.error(err?.response?.data?.message || 'Failed to save task.');
    } finally {
      setSaving(false);
    }
  };

  // ─── Delete task ──────────────────────────────────────────────────────
  const handleDelete = async (taskId) => {
    if (!window.confirm('Delete this task? This cannot be undone.')) return;
    try {
      await deleteTask(taskId);
      setTasks((prev) => prev.filter((t) => t._id !== taskId));
      toast.success('Task deleted.');
    } catch {
      toast.error('Failed to delete task.');
    }
  };

  // ─── Open modal for edit ──────────────────────────────────────────────
  const handleEdit = (task) => {
    setEditingTask(task);
    setModalOpen(true);
  };

  const handleAddTask = () => {
    setEditingTask(null);
    setModalOpen(true);
  };

  if (loading) return <Loader text="Loading your board..." />;

  return (
    <>
      {/* Board Header */}
      <div className="board-header">
        <h2 className="board-title">🗂️ Kanban Board</h2>
        <div className="board-filters">
          <select
            className="filter-select"
            value={filterPriority}
            onChange={(e) => setFilterPriority(e.target.value)}
          >
            <option value="">All Priorities</option>
            <option value="high">🔴 High</option>
            <option value="medium">🟡 Medium</option>
            <option value="low">🟢 Low</option>
          </select>
          <button className="btn btn-primary btn-sm" onClick={handleAddTask}>
            + New Task
          </button>
        </div>
      </div>

      {/* Drag-and-Drop Board */}
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="board-columns">
          {COLUMNS.map((status) => (
            <Column
              key={status}
              status={status}
              tasks={getColumnTasks(status)}
              onEdit={handleEdit}
              onDelete={handleDelete}
              onAddTask={handleAddTask}
            />
          ))}
        </div>
      </DragDropContext>

      {/* Task Create/Edit Modal */}
      {modalOpen && (
        <TaskModal
          task={editingTask}
          onSave={handleSaveTask}
          onClose={() => { setModalOpen(false); setEditingTask(null); }}
          saving={saving}
        />
      )}
    </>
  );
};

export default Board;
