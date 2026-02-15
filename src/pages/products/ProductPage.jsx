import { motion } from 'framer-motion';
import { FaCheckCircle, FaDownload } from 'react-icons/fa';
import PageHero from '../../components/PageHero';
import './ProductPage.css';

function ProductPage({ title, description, image, features, pdfLink, color = 'primary' }) {
  return (
    <div className={`product-page page-transition ${color}`}>
      {/* Hero Section */}
      <PageHero
        title={title}
        subtitle={description}
        breadcrumbs={[
          { label: 'Shop', link: '/shop' },
          { label: title }
        ]}
        variant={color}
      />

      {/* Product Details - Editorial Layout */}
      <section className="product-details section bg-mesh">
        <div className="container">
          <div className="editorial-grid">
            <motion.div
              className="editorial-image-side"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="editorial-image-wrapper glass-shine">
                <img src={image} alt={title} />
              </div>
            </motion.div>
 
            <motion.div
              className="editorial-info-side"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="info-overline">Product Overview</span>
              <h2 className="editorial-heading">{title}</h2>
              <p className="editorial-description">{description}</p>
              
              <div className="features-editorial">
                <h3>Key Features</h3>
                <ul className="product-features-list">
                  {features.map((feature, index) => (
                    <li key={index}>
                      <FaCheckCircle className="icon-accent" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="editorial-actions">
                {pdfLink && (
                  <a
                    href={pdfLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="editorial-btn primary"
                  >
                    <FaDownload />
                    Download Catalog
                  </a>
                )}

                <a
                  href="http://wa.me/917069621777"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="editorial-btn secondary"
                >
                  Request a Quote
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="trust-section section-sm">
        <div className="container">
          <div className="trust-banner glass-card">
            <div className="trust-item">
              <span className="trust-num">15+</span>
              <span className="trust-label">Years of Expertise</span>
            </div>
            <div className="trust-divider"></div>
            <div className="trust-item">
              <span className="trust-num">100%</span>
              <span className="trust-label">Premium Quality</span>
            </div>
            <div className="trust-divider"></div>
            <div className="trust-item">
              <span className="trust-num">5k+</span>
              <span className="trust-label">Happy Spaces</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductPage;
