import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaWhatsapp, FaQuoteRight } from 'react-icons/fa';
import PageHero from '../components/PageHero';
import ScrollReveal from '../components/ScrollReveal';
import AnimatedCard from '../components/AnimatedCard';
import QuoteModal from '../components/QuoteModal';
import './Interior.css';
import Newsletter from '../components/Newsletter';

function Interior() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');
  
  const openQuoteModal = (productTitle) => {
    setSelectedProduct(productTitle);
    setIsQuoteModalOpen(true);
  };
  const products = [
    {
      title: 'Premium Plywood',
      description: 'High-quality plywood for durable and elegant furniture',
      image: 'https://images.unsplash.com/photo-1615873968403-89e068629265?w=600&q=80',
      features: ['Waterproof', 'Termite Resistant', 'Multiple Thickness'],
      link: '/interior/aangan-plywood',
    },
    {
      title: 'Plain Laminates',
      description: 'Smooth, elegant laminates in various colors',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80',
      features: ['Scratch Resistant', 'Easy Maintenance', 'Wide Color Range'],
      link: '/interior/aangan-plain-laminate',
    },
    {
      title: 'Mocco Laminates',
      description: 'Textured laminates with sophisticated patterns',
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80',
      features: ['Unique Textures', 'Premium Finish', 'Durable Surface'],
      link: '/interior/aangan-mocco-laminate',
    },
    {
      title: 'Acrylic Sheets',
      description: 'Versatile acrylic for modern interior applications',
      image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=600&q=80',
      features: ['High Gloss', 'UV Resistant', 'Multiple Colors'],
      link: '/interior/aangan-acrylic',
    },
    {
      title: 'Louvers',
      description: 'Stylish louvers for ventilation and aesthetics',
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600&q=80',
      features: ['Ventilation', 'Privacy', 'Modern Design'],
      link: '/louvers',
    },
    {
      title: 'A-Fab Materials',
      description: 'Premium fabric-based decorative materials',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80',
      features: ['Soft Touch', 'Elegant Look', 'Easy Installation'],
      link: '/interior/a-fab',
    },
  ];

  return (
    <div className="interior page-transition">
      {/* Hero Section */}
      <PageHero
        title="Interior Items"
        subtitle="Premium materials for stunning interiors - plywood, laminates, acrylic, and more"
        breadcrumbs={[{ label: 'Interior Items' }]}
        variant="primary"
        backgroundImage="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1920"
      />

      {/* Products Section - Gallery Editorial Grid */}
      <section className="products-section section bg-mesh">
        <div className="container">
          <div className="gallery-grid">
            {products.map((product, index) => (
              <ScrollReveal key={product.title} direction="up" delay={index * 0.1}>
                <div className="gallery-item group">
                  <div className="gallery-image-wrapper">
                    <img src={product.image} alt={product.title} className="gallery-image" />
                    
                    {/* Hover Content */}
                    <div className="gallery-overlay">
                      <div className="gallery-info">
                        <span className="gallery-category">Premium Quality</span>
                        <h3 className="gallery-title">{product.title}</h3>
                        <p className="gallery-desc">{product.description}</p>
                        
                        <div className="gallery-actions">
                          <button 
                            className="action-pill quote-btn"
                            onClick={() => openQuoteModal(product.title)}
                          >
                            <FaQuoteRight /> Quote
                          </button>
                          <Link to={product.link} className="action-pill primary">
                            Details <FaArrowRight />
                          </Link>
                          <a 
                            href={`http://wa.me/917069630777?text=Hi, I'm interested in ${product.title}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="action-pill whatsapp"
                          >
                            <FaWhatsapp />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Static Info (Visible on Mobile or as Minimal Label) */}
                  <div className="gallery-footer">
                    <h4 className="footer-title">{product.title}</h4>
                    <div className="footer-line"></div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section section-sm">
        {/* Particles Removed */}
        <div className="container">
          <ScrollReveal direction="up">
            <div className="cta-content glass-card">
              <h2>Need Help Choosing?</h2>
              <p>Our experts are here to guide you in selecting the perfect materials for your project</p>
              <div className="cta-actions">
                <a href="http://wa.me/917069630777" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Contact Our Experts
                </a>
                <Link to="/contact" className="btn btn-outline">
                  Request Samples
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
      
      <Newsletter />

      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
        productTitle={selectedProduct}
      />
    </div>
  );
}

export default Interior;
