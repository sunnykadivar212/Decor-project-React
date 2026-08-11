import { motion } from 'framer-motion';
import './GradientButton.css';

function GradientButton({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  onClick,
  loading = false,
  disabled = false,
  className = '',
  ...props 
}) {
  return (
    <motion.button
      className={`gradient-btn gradient-btn-${variant} gradient-btn-${size} ${className} ${disabled || loading ? 'disabled' : ''}`}
      onClick={onClick}
      disabled={disabled || loading}
      whileHover={{ scale: disabled || loading ? 1 : 1.02 }}
      whileTap={{ scale: disabled || loading ? 1 : 0.98 }}
      {...props}
    >
      {loading && (
        <span className="btn-spinner"></span>
      )}
      
      <span className={`btn-content ${loading ? 'loading' : ''}`}>
        {children}
      </span>
    </motion.button>
  );
}

export default GradientButton;
