import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';
import './PageHero.css';

function PageHero({ title, subtitle, breadcrumbs, variant = 'primary', backgroundImage }) {
  const heroStyle = backgroundImage ? { 
    backgroundImage: `url('${backgroundImage}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  } : {};

  return (
    <section className={`page-hero ${variant}-hero ${backgroundImage ? 'has-bg-image' : ''}`} style={heroStyle}>
      {backgroundImage && <div className="page-hero-overlay"></div>}
      <div className="container">
        <motion.div
          className="page-hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {breadcrumbs && (
            <div className="breadcrumb">
              <Link to="/">Home</Link>
              {breadcrumbs.map((crumb, index) => (
                <span key={index}>
                  <FaChevronRight />
                  {crumb.link ? (
                    <Link to={crumb.link}>{crumb.label}</Link>
                  ) : (
                    <span>{crumb.label}</span>
                  )}
                </span>
              ))}
            </div>
          )}
          <h1>{title}</h1>
          {subtitle && <p className="hero-subtitle">{subtitle}</p>}
        </motion.div>
      </div>
    </section>
  );
}

export default PageHero;
