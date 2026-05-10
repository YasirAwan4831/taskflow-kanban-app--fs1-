import { useState, useEffect } from 'react';
import MainLayout from '../../layouts/MainLayout';
import Board from '../../components/kanban/Board';
import { fetchTasks } from '../../services/taskService';
import useAuth from '../../hooks/useAuth';

const StatCard = ({ icon, value, label, colorClass }) => (
  <div className="stat-card">
    <div className={`stat-icon ${colorClass}`}>{icon}</div>
    <div>
      <div className="stat-value">{value}</div>
      <div className="stat-label">{label}</div>
    </div>
  </div>
);

const Dashboard = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState({ total: 0, todo: 0, inProgress: 0, done: 0 });

  useEffect(() => {
    const loadStats = async () => {
      try {
        const { tasks } = await fetchTasks();
        setStats({
          total: tasks.length,
          todo: tasks.filter((t) => t.status === 'todo').length,
          inProgress: tasks.filter((t) => t.status === 'in_progress').length,
          done: tasks.filter((t) => t.status === 'done').length,
        });
      } catch {
        // Stats fail silently — board still works
      }
    };
    loadStats();
  }, []);

  return (
    <MainLayout
      title="Dashboard"
      subtitle={`${user?.name}'s workspace`}
    >
      {/* Stats Overview */}
      <div className="stats-grid">
        <StatCard icon="📋" value={stats.total}      label="Total Tasks"    colorClass="purple" />
        <StatCard icon="📝" value={stats.todo}       label="To-Do"          colorClass="blue"   />
        <StatCard icon="⚙️" value={stats.inProgress} label="In Progress"    colorClass="yellow" />
        <StatCard icon="✅" value={stats.done}       label="Completed"      colorClass="green"  />
      </div>

      {/* Kanban Board */}
      <Board />
    </MainLayout>
  );
};

export default Dashboard;
