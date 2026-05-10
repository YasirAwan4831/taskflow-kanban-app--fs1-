// Loader and Spinner components for loading states

export const Spinner = ({ size = 'md' }) => (
  <span className={`spinner ${size === 'sm' ? 'spinner-sm' : ''}`} />
);

export const Loader = ({ text = 'Loading...' }) => (
  <div className="loader-wrap">
    <div style={{ textAlign: 'center' }}>
      <Spinner />
      {text && <p className="text-muted text-sm" style={{ marginTop: 12 }}>{text}</p>}
    </div>
  </div>
);

export const PageLoader = () => (
  <div className="page-loader">
    <div style={{
      width: 48, height: 48, borderRadius: 12,
      background: 'linear-gradient(135deg, var(--accent), #a78bfa)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: 24, marginBottom: 8,
    }}>📋</div>
    <Spinner />
    <p className="page-loader-text">Loading TaskFlow...</p>
  </div>
);

export default Loader;
