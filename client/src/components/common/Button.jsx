// Reusable Button component with loading state support
const Button = ({
  children,
  variant = 'primary',
  size = '',
  loading = false,
  disabled = false,
  full = false,
  icon = null,
  onClick,
  type = 'button',
  className = '',
}) => {
  const classes = [
    'btn',
    `btn-${variant}`,
    size ? `btn-${size}` : '',
    full ? 'btn-full' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading ? (
        <span className="spinner spinner-sm" />
      ) : (
        icon && <span>{icon}</span>
      )}
      {children}
    </button>
  );
};

export default Button;
