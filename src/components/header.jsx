import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaPhone, FaWhatsapp } from 'react-icons/fa';
import logoDark from '../assets/logo-dark.svg';
import './Header.css';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/turnkey-projects', label: 'Turnkey Projects' },
    { path: '/interior', label: 'Interior Items' },
    { path: '/decorative', label: 'Decorative Items' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <motion.header
      className={`header ${isScrolled ? 'header-scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Top Bar - Premium Addition */}
      <div className="header-top-bar">
        <div className="container-wide top-bar-content">
          <div className="top-bar-left">
            <span className="top-bar-text">India's Premium Decor Solutions</span>
          </div>
          <div className="top-bar-right">
            <a href="mailto:aangandecor7@gmail.com" className="top-bar-link">aangandecor7@gmail.com</a>
            <span className="top-bar-divider">|</span>
            <a href="tel:+919876543210" className="top-bar-link">+91 98765 43210</a>
          </div>
        </div>
      </div>

      <div className="container-wide header-content">
        {/* Logo */}
        <Link to="/" className="logo">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={logoDark} alt="Aangan Decor" className="logo-image" />
          </motion.div>
        </Link>

        {/* Actions */}
        <div className="header-actions">
          <Link to="/contact" className="btn btn-primary header-cta">
            Get Quote
          </Link>
          
          <motion.button
            className="menu-button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaBars />
          </motion.button>
        </div>
      </div>

      {/* Full-Screen Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fullscreen-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Left Panel - Decoration/Brand */}
            <motion.div 
              className="menu-left"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.6, ease: [0.6, 0.05, -0.01, 0.9] }}
            >
              <div className="menu-brand-content">
                <span className="menu-brand-subtitle">Premium Decor Solutions</span>
                <h2 className="menu-brand-title">Aangan<br/>Group</h2>
                <div className="menu-contact-info">
                   <p>Morbi - 2, Gujarat</p>
                   <a href="mailto:aangandecor7@gmail.com">aangandecor7@gmail.com</a>
                </div>
              </div>
              <div className="menu-blob"></div>
            </motion.div>

            {/* Right Panel - Navigation */}
            <motion.div 
              className="menu-right"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.6, ease: [0.6, 0.05, -0.01, 0.9] }}
            >
              {/* Close Button */}
              <motion.button
                className="menu-close-button"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaTimes />
              </motion.button>

              <nav className="fullscreen-nav">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ 
                      delay: 0.3 + index * 0.1,
                      duration: 0.5,
                      ease: "easeOut"
                    }}
                  >
                    <Link
                      to={link.path}
                      className={`fullscreen-nav-link ${location.pathname === link.path ? 'active' : ''}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className="nav-number">0{index + 1}</span>
                      <span className="nav-text">{link.label}</span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div 
                className="menu-footer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                 <div className="menu-socials">
                    <a href="#" className="social-link">Instagram</a>
                    <a href="#" className="social-link">Facebook</a>
                    <a href="#" className="social-link">LinkedIn</a>
                 </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Header;
