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

      {/* Product Details */}
      <section className="product-details section">
        <div className="container">
          <div className="product-grid">
            <motion.div
              className="product-image-section"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="product-image-wrapper">
                <img src={image} alt={title} />
              </div>
            </motion.div>

            <motion.div
              className="product-info-section"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>Features & Benefits</h2>
              <ul className="product-features">
                {features.map((feature, index) => (
                  <li key={index}>
                    <FaCheckCircle />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {pdfLink && (
                <a
                  href={pdfLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary download-btn"
                >
                  <FaDownload />
                  Download Catalog
                </a>
              )}

              <a
                href="http://wa.me/917069630777"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Get Quote
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductPage;
