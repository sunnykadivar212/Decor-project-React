import { motion } from 'framer-motion';
import './LoadingSpinner.css';

function LoadingSpinner({ fullPage = true }) {
  if (fullPage) {
    return (
      <div className="loading-overlay">
        <div className="loading-content">
          <motion.div
            className="spinner-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="spinner">
              <div className="spinner-circle"></div>
              <div className="spinner-circle"></div>
              <div className="spinner-circle"></div>
            </div>
            <motion.p
              className="loading-text"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Loading...
            </motion.p>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="spinner-inline">
      <div className="spinner-circle"></div>
    </div>
  );
}

export default LoadingSpinner;
