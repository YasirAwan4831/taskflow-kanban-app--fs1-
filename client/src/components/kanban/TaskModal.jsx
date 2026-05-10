import { useState, useEffect } from 'react';
import Button from '../common/Button';
import { fetchUsers } from '../../services/taskService';

const PRIORITIES = ['low', 'medium', 'high'];
const STATUSES = [
  { value: 'todo', label: 'To-Do' },
  { value: 'in_progress', label: 'In Progress' },
  { value: 'done', label: 'Done' },
];

const TaskModal = ({ task, onSave, onClose, saving }) => {
  const isEditing = !!task;
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({
    title: task?.title || '',
    description: task?.description || '',
    priority: task?.priority || 'medium',
    status: task?.status || 'todo',
    dueDate: task?.dueDate ? task.dueDate.slice(0, 10) : '',
    assignedTo: task?.assignedTo?._id || '',
    tags: task?.tags?.join(', ') || '',
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    fetchUsers()
      .then((d) => setUsers(d.users || []))
      .catch(() => {});
  }, []);

  const set = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const validate = () => {
    const errs = {};
    if (!form.title.trim() || form.title.trim().length < 3)
      errs.title = 'Title must be at least 3 characters.';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    const payload = {
      ...form,
      tags: form.tags ? form.tags.split(',').map((t) => t.trim()).filter(Boolean) : [],
      dueDate: form.dueDate || null,
      assignedTo: form.assignedTo || null,
    };
    onSave(payload);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">{isEditing ? '✏️ Edit Task' : '✨ New Task'}</h2>
          <button className="modal-close" onClick={onClose}>×</button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="modal-body">
            {/* Title */}
            <div className="form-group">
              <label className="form-label">Title <span style={{ color: 'var(--danger)' }}>*</span></label>
              <input
                className={`form-input ${errors.title ? 'error' : ''}`}
                placeholder="Enter task title..."
                value={form.title}
                onChange={set('title')}
                maxLength={100}
              />
              {errors.title && <p className="form-error">{errors.title}</p>}
            </div>

            {/* Description */}
            <div className="form-group">
              <label className="form-label">Description</label>
              <textarea
                className="form-input"
                placeholder="Add a description..."
                value={form.description}
                onChange={set('description')}
                rows={3}
                maxLength={500}
                style={{ resize: 'vertical' }}
              />
            </div>

            {/* Priority + Status */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              <div className="form-group">
                <label className="form-label">Priority</label>
                <select className="form-input filter-select" value={form.priority} onChange={set('priority')} style={{ width: '100%' }}>
                  {PRIORITIES.map((p) => (
                    <option key={p} value={p}>{p.charAt(0).toUpperCase() + p.slice(1)}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Status</label>
                <select className="form-input filter-select" value={form.status} onChange={set('status')} style={{ width: '100%' }}>
                  {STATUSES.map((s) => (
                    <option key={s.value} value={s.value}>{s.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Due Date + Assign */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              <div className="form-group">
                <label className="form-label">Due Date</label>
                <input type="date" className="form-input" value={form.dueDate} onChange={set('dueDate')}
                  style={{ colorScheme: 'dark' }} />
              </div>
              <div className="form-group">
                <label className="form-label">Assign To</label>
                <select className="form-input filter-select" value={form.assignedTo} onChange={set('assignedTo')} style={{ width: '100%' }}>
                  <option value="">Unassigned</option>
                  {users.map((u) => (
                    <option key={u._id} value={u._id}>{u.name}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Tags */}
            <div className="form-group">
              <label className="form-label">Tags <span style={{ color: 'var(--text-muted)', fontSize: 11 }}>(comma-separated)</span></label>
              <input className="form-input" placeholder="e.g. frontend, bug, urgent" value={form.tags} onChange={set('tags')} />
            </div>
          </div>

          <div className="modal-footer">
            <Button variant="secondary" onClick={onClose} type="button">Cancel</Button>
            <Button variant="primary" type="submit" loading={saving}>
              {isEditing ? 'Update Task' : 'Create Task'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskModal;
