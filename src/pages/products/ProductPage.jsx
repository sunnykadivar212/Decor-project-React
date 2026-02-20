import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheckCircle, FaDownload, FaExpand } from 'react-icons/fa';
import PageHero from '../../components/PageHero';
import ImageGallery from '../../components/ImageGallery';
import './ProductPage.css';

function ProductPage({ title, description, image, gallery, features, pdfLink, color = 'primary', options = [], heroImage }) {
  const [showGallery, setShowGallery] = useState(false);
  const [activeImage, setActiveImage] = useState(image);
  const [activeOption, setActiveOption] = useState(null);
  
  const finalHeroImage = heroImage;
  
  // If gallery is provided, use it; otherwise create a single-image gallery
  const galleryImages = gallery || [{ url: image, alt: title }];

  const handleOptionClick = (option) => {
    setActiveImage(option.image);
    setActiveOption(option.name);
  };

  // Derive the correct category breadcrumb from the color/theme prop
  const categoryMap = {
    plywood:    { label: 'Interior',    link: '/interior' },
    laminate:   { label: 'Interior',    link: '/interior' },
    primary:    { label: 'Interior',    link: '/interior' },
    decorative: { label: 'Decorative', link: '/decorative' },
    furniture:  { label: 'Decorative', link: '/decorative' },
  };
  const category = categoryMap[color] || { label: 'Interior', link: '/interior' };

  return (
    <div className={`product-page page-transition ${color}`}>
      {/* Hero Section */}
      <PageHero
        title={title}
        subtitle={description}
        breadcrumbs={[
          category,
          { label: title }
        ]}
        variant={color}
        backgroundImage={finalHeroImage}
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
              <div 
                className="editorial-image-wrapper glass-shine" 
                style={{ position: 'relative', overflow: 'hidden' }}
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeImage}
                    src={activeImage}
                    alt={activeOption || title}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </AnimatePresence>
                {activeOption && (
                  <div className="active-option-badge">
                    <span>{activeOption}</span>
                  </div>
                )}
                {gallery && gallery.length > 1 && (
                  <div className="gallery-overlay-hint" onClick={() => setShowGallery(true)} style={{ cursor: 'pointer' }}>
                    <FaExpand />
                    <span>{gallery.length} Images</span>
                  </div>
                )}
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

          {/* New Options Section */}
          {options && options.length > 0 && (
            <div className="product-options-section">
              <div className="section-header text-center">
                <span className="info-overline">Variety & Customization</span>
                <h2 className="editorial-heading">Available Options</h2>
              </div>
              
              <div className="options-grid">
                {options.map((option, index) => (
                  <motion.div 
                    key={index}
                    className={`option-card glass-card ${activeOption === option.name ? 'option-active' : ''}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    onClick={() => handleOptionClick(option)}
                    style={{ cursor: 'pointer' }}
                    whileHover={{ y: -4 }}
                  >
                    <div className="option-image">
                      <img src={option.image} alt={option.name} loading="lazy" />
                    </div>
                    <div className="option-info">
                      <h4>{option.name}</h4>
                      {option.description && <p>{option.description}</p>}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
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

      {/* Image Gallery Modal */}
      <AnimatePresence>
        {showGallery && (
          <ImageGallery
            images={galleryImages}
            initialIndex={0}
            onClose={() => setShowGallery(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default ProductPage;
