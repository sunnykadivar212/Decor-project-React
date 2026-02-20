import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHome, FaSearch, FaArrowLeft } from 'react-icons/fa';
import './NotFound.css';

function NotFound() {
  return (
    <div className="not-found page-transition">
      <div className="not-found-content">
        <motion.div
          className="not-found-animation"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="error-code">404</h1>
          <div className="error-icon">🌿</div>
        </motion.div>

        <motion.div
          className="not-found-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2>Page Not Found</h2>
          <p>
            Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
          </p>
        </motion.div>

        <motion.div
          className="not-found-actions"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link to="/" className="btn btn-primary">
            <FaHome />
            <span>Go Home</span>
          </Link>
          <Link to="/interior" className="btn btn-outline">
            <FaSearch />
            <span>Browse Products</span>
          </Link>
        </motion.div>

        <motion.div
          className="helpful-links"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3>Popular Pages</h3>
          <div className="links-grid">
            <Link to="/interior">Interior Items</Link>
            <Link to="/decorative">Decorative Items</Link>
            <Link to="/services">Our Services</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default NotFound;
