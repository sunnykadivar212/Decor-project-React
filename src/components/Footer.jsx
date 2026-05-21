import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaWhatsapp, FaLinkedin, FaArrowRight } from 'react-icons/fa';
import logoDark from '../assets/logo-dark.svg';
import './Footer.css';

const quickLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About Us' },
  { path: '/turnkey-projects', label: 'Turnkey Projects' },
  { path: '/interior', label: 'Interior Items' },
  { path: '/decorative', label: 'Decorative Items' },
  { path: '/contact', label: 'Contact Us' },
];

const products = [
  'Plywood & MDF', 'Laminates', 'Acrylic Sheets',
  'Veneer', 'PU Wall Panels', 'False Ceiling',
  'Mandala Art', 'Designer Mirrors', 'Designer Lights',
  'Artifacts', 'Clocks', 'Curtains',
];

const socials = [
  { href: 'https://www.facebook.com/AanganDecor', icon: <FaFacebook />, label: 'Facebook', color: '#1877F2' },
  { href: 'https://www.instagram.com/aangan__decor', icon: <FaInstagram />, label: 'Instagram', color: '#E1306C' },
  { href: 'http://wa.me/917069630777', icon: <FaWhatsapp />, label: 'WhatsApp', color: '#25D366' },
  { href: 'https://linkedin.com', icon: <FaLinkedin />, label: 'LinkedIn', color: '#0A66C2' },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">

            {/* ─ Brand Column */}
            <div className="footer-col footer-brand-col">
              <Link to="/" className="footer-logo">
                <img src={logoDark} alt="Aangan Decor" />
              </Link>
              <p className="footer-desc">
                Transforming spaces with premium interior and decorative solutions.
                Quality craftsmanship meets elegant design.
              </p>

              <div className="footer-group-companies">
                <span className="footer-group-label">Our Group</span>
                <div className="footer-group-list">
                  <span>Aangan Decor</span>
                  <span>Aangan Design Studio</span>
                </div>
              </div>

              <div className="footer-socials">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-icon"
                    aria-label={s.label}
                    style={{ '--social-color': s.color }}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* ─ Quick Links */}
            <div className="footer-col">
              <h4 className="footer-col-heading">Quick Links</h4>
              <ul className="footer-links">
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path}>
                      <FaArrowRight aria-hidden="true" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* ─ Products */}
            <div className="footer-col">
              <h4 className="footer-col-heading">Our Products</h4>
              <ul className="footer-links footer-products">
                {products.map((p) => (
                  <li key={p}>
                    <span className="footer-product-dot" aria-hidden="true" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* ─ Contact */}
            <div className="footer-col">
              <h4 className="footer-col-heading">Get In Touch</h4>
              <ul className="footer-contact">
                <li>
                  <span className="contact-icon"><FaPhone /></span>
                  <div className="contact-text">
                    <a href="tel:+917069621777">+91 70696 21777</a>
                    <a href="tel:+917069622777">+91 70696 22777</a>
                  </div>
                </li>
                <li>
                  <span className="contact-icon"><FaEnvelope /></span>
                  <div className="contact-text">
                    <a href="mailto:aangandecor7@gmail.com">aangandecor7@gmail.com</a>
                  </div>
                </li>
                <li>
                  <span className="contact-icon"><FaMapMarkerAlt /></span>
                  <div className="contact-text">
                    <a
                      href="https://www.google.com/maps/place/AANGAN+DECOR/@22.8009269,70.8162366,17z/data=!4m14!1m7!3m6!1s0x39598d0074e4713b:0x2feeedf7a891372f!2sAANGAN+DECOR!8m2!3d22.8009269!4d70.8162366!16s%2Fg%2F11lymc8fjk!3m5!1s0x39598d0074e4713b:0x2feeedf7a891372f!8m2!3d22.8009269!4d70.8162366!16s%2Fg%2F11lymc8fjk?authuser=0&entry=ttu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-address"
                    >
                      3rd Floor, Sky Tower, Upper Sanket India,<br />
                      Nr. Umiya Circle, Morbi 363 641
                    </a>
                  </div>
                </li>
              </ul>

              <a
                href="http://wa.me/917069621777"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-whatsapp-btn"
              >
                <FaWhatsapp />
                Chat on WhatsApp
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-inner">
            <p>© {currentYear} Aangan Decor. All rights reserved.</p>
            <div className="footer-bottom-links">
              <Link to="/privacy-policy">Privacy Policy</Link>
              <span aria-hidden="true">·</span>
              <Link to="/terms-conditions">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
