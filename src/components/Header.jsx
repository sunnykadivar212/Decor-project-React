import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaWhatsapp } from 'react-icons/fa';
import logoDark from '../assets/logo-dark.svg';
import './Header.css';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/turnkey-projects', label: 'Turnkey Projects' },
  { path: '/interior', label: 'Interior Items' },
  { path: '/decorative', label: 'Decorative Items' },
  { path: '/contact', label: 'Contact' },
];

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const headerRef = useRef(null);

  // Determine if we're on the home page (where hero image exists)
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Check initial state (e.g. navigating to /about which has no hero)
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    // Re-check scroll position when route changes
    setIsScrolled(window.scrollY > 60);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const update = () => {
      if (headerRef.current) {
        document.documentElement.style.setProperty(
          '--header-total-height',
          `${headerRef.current.offsetHeight}px`
        );
      }
    };
    update();
    window.addEventListener('resize', update, { passive: true });
    return () => window.removeEventListener('resize', update);
  }, [isScrolled]);

  // Transparent on home page when at top, solid glass otherwise
  const isTransparent = isHomePage && !isScrolled;

  return (
    <motion.header
      ref={headerRef}
      className={`header ${isScrolled ? 'header-scrolled' : ''} ${isTransparent ? 'header-transparent' : ''}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Top Bar — hidden when transparent */}
      {!isTransparent && (
        <div className="header-top-bar">
          <div className="container-wide top-bar-content">
            <div className="top-bar-left">
              <span className="top-bar-tagline">India's Premium Decor Solutions</span>
            </div>
            <div className="top-bar-right">
              <a href="mailto:aangandecor7@gmail.com" className="top-bar-link">aangandecor7@gmail.com</a>
              <span className="top-bar-divider" aria-hidden="true" />
              <a href="tel:+917069621777" className="top-bar-link">+91 70696 21777</a>
            </div>
          </div>
        </div>
      )}

      <div className="container-wide header-content">
        {/* Logo */}
        <Link to="/" className="logo" aria-label="Aangan Decor — Home">
          <img src={logoDark} alt="Aangan Decor" className="logo-image" />
        </Link>

        {/* Desktop Nav */}
        <nav className="desktop-nav" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`desktop-nav-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="header-actions">
          <a
            href="http://wa.me/917069621777"
            target="_blank"
            rel="noopener noreferrer"
            className="header-whatsapp"
            aria-label="WhatsApp us"
          >
            <FaWhatsapp />
            <span>WhatsApp</span>
          </a>
          <Link to="/contact" className="btn btn-primary header-cta">
            Get Quote
          </Link>
          <motion.button
            className={`menu-button ${isTransparent ? 'menu-button-light' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={isMobileMenuOpen ? 'close' : 'open'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
              </motion.span>
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Full-Screen Overlay Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fullscreen-menu"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          >
            {/* Brand Panel */}
            <div className="menu-left">
              <div className="menu-brand-content">
                <span className="menu-brand-eyebrow">Premium Decor Solutions</span>
                <h2 className="menu-brand-title">Aangan<br />Group</h2>
                <div className="menu-contact-info">
                  <p>Morbi, Gujarat — India</p>
                  <a href="mailto:aangandecor7@gmail.com">aangandecor7@gmail.com</a>
                </div>
              </div>
              <div className="menu-blob" aria-hidden="true" />
            </div>

            {/* Navigation Panel */}
            <div className="menu-right">
              <nav className="fullscreen-nav" aria-label="Full screen navigation">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ x: 60, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + index * 0.08, duration: 0.5, ease: 'easeOut' }}
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
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65 }}
              >
                <div className="menu-socials">
                  <a href="https://www.instagram.com/aangan__decor" target="_blank" rel="noopener noreferrer" className="social-link">Instagram</a>
                  <a href="https://www.facebook.com/AanganDecor" target="_blank" rel="noopener noreferrer" className="social-link">Facebook</a>
                  <a href="http://wa.me/917069621777" target="_blank" rel="noopener noreferrer" className="social-link">WhatsApp</a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Header;
