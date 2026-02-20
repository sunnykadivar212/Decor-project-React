import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaPhone, FaWhatsapp } from 'react-icons/fa';
import logoDark from '../assets/logo-dark.svg';
import './Header.css';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const headerRef = useRef(null);

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

  // Update header height CSS variable dynamically
  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        const height = headerRef.current.offsetHeight;
        document.documentElement.style.setProperty('--header-total-height', `${height}px`);
      }
    };

    // Update on mount and when scroll state changes
    updateHeaderHeight();
    
    // Also update on resize
    window.addEventListener('resize', updateHeaderHeight);
    return () => window.removeEventListener('resize', updateHeaderHeight);
  }, [isScrolled]); // Re-run when scroll state changes

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
      ref={headerRef}
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
            <a href="tel:+919876543210" className="top-bar-link">+91 70696 21777</a>
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
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </motion.button>
        </div>
      </div>

      {/* Full-Screen Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fullscreen-menu"
            initial={{ y: '-100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '-100%', opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.6, 0.05, 0.01, 0.9] }}
          >
            {/* Left Panel - Decoration/Brand */}
            <motion.div 
              className="menu-left"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
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
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
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
