import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import Newsletter from './Newsletter';
import logoDark from '../assets/logo-dark.svg';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/interior', label: 'Interior Items' },
    { path: '/decorative', label: 'Decorative Items' },
    { path: '/contact', label: 'Contact Us' },
  ];

  const categories = [
    'Plywood',
    'Laminates',
    'Acrylic',
    'Louvers',
    'Mandala Art',
    'Clocks',
    'Designer Mirrors',
    'Designer Lights',
    'Artifacts',
    'Furniture',
    'Hardware & Materials',
  ];

  return (
    <footer className="footer">
      {/* Newsletter Section */}
      {/*<Newsletter />*/}

      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* Company Info */}
            <motion.div
              className="footer-column"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="footer-logo">
                <img src={logoDark} alt="Aangan Decor" className="logo-image" />
              </div>
              <p className="footer-description">
                Transforming spaces with premium interior and decorative solutions. 
                Quality craftsmanship meets elegant design.
              </p>
              
              {/* Our Group Of Agency */}
              <div className="group-companies elevated-section">
                <h5 className="accent-title">Our Group Of Agency</h5>
                <ul className="group-list">
                  <li>
                    <span className="brand-dot"></span>
                    <span className="brand-name">Aangan Decor</span>
                  </li>
                  <li>
                    <span className="brand-dot"></span>
                    <span className="brand-name">Aangan Design Studio</span>
                  </li>
                </ul>
              </div>

              {/* Instagram Section */}
              <div className="instagram-section">
                <p className="instagram-text">
                  Share with <strong>#Aangan</strong>
                </p>
                <a 
                  href="https://www.instagram.com/aangan__decor" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="instagram-link"
                >
                  Follow @aangan__decor for more
                </a>
              </div>

              <div className="social-links premium-socials">
                <motion.a
                  href="https://www.facebook.com/AanganDecor"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="social-icon-wrapper fb"
                >
                  <FaFacebook />
                </motion.a>
                <motion.a
                  href="https://www.instagram.com/aangan__decor"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: -5 }}
                  className="social-icon-wrapper ig"
                >
                  <FaInstagram />
                </motion.a>
                <motion.a
                  href="http://wa.me/917069630777"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="social-icon-wrapper wa"
                >
                  <FaWhatsapp />
                </motion.a>
                <motion.a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: -5 }}
                  className="social-icon-wrapper li"
                >
                  <FaLinkedin />
                </motion.a>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              className="footer-column"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="footer-heading">Quick Links</h4>
              <ul className="footer-links">
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Categories */}
            <motion.div
              className="footer-column"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="footer-heading">Our Products</h4>
              <ul className="footer-links">
                {categories.map((category) => (
                  <li key={category}>
                    <span>{category}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="footer-column"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h4 className="footer-heading">Contact Us</h4>
              <ul className="footer-contact">
                <li>
                  <FaPhone />
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                    <a href="tel:917069621777">+91 70696 21777</a>
                    <a href="tel:917069622777">+91 70696 22777</a>
                  </div>
                </li>
                <li>
                  <FaEnvelope />
                  <a href="mailto:aangandecor7@gmail.com">aangandecor7@gmail.com</a>
                </li>
                <li>
                  <FaMapMarkerAlt />
                  <span>3rd Floor, Sky Tower, Upper Sanket India, Nr. Umiya Circle, Morbi 363 641</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Aangan Decor. All rights reserved.</p>
            <div className="footer-bottom-links">
              <Link to="/privacy-policy">Privacy Policy</Link>
              <span>•</span>
              <Link to="/terms-conditions">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
