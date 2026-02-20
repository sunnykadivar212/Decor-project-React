import { Link } from 'react-router-dom';
import { FaArrowRight, FaWhatsapp, FaQuoteRight } from 'react-icons/fa';
import PageHero from '../components/PageHero';
import ScrollReveal from '../components/ScrollReveal';
import AnimatedCard from '../components/AnimatedCard';
import QuoteModal from '../components/QuoteModal'; // Added QuoteModal import
import './Decorative.css';
import Newsletter from '../components/Newsletter';
import { useState } from 'react'; // Added useState import

function Decorative() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');
  
  const openQuoteModal = (productTitle) => {
    setSelectedProduct(productTitle);
    setIsQuoteModalOpen(true);
  };
  const products = [
    {
      title: 'Mandala Art',
      description: 'Intricate handcrafted mandala designs for wall decoration',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&q=80',
      features: ['Handcrafted', 'Multiple Sizes', 'Custom Colors'],
      link: '/decorative/mandala-art',
    },
    {
      title: 'Decorative Accents',
      description: 'Unique decorative pieces to enhance your space',
      image: 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=600&q=80',
      features: ['Unique Designs', 'Premium Materials', 'Easy Installation'],
      link: '/decorative/aangan-decorative',
    },
    {
      title: 'Indoor Plants',
      description: 'Beautiful plants to bring life to your interiors',
      image: 'https://images.unsplash.com/photo-1463320726281-696a485928c7?w=600&q=80',
      features: ['Low Maintenance', 'Air Purifying', 'Various Sizes'],
      link: '/decorative/plants',
    },
    {
      title: 'Wall Art Collection',
      description: 'Curated wall art pieces for modern spaces',
      image: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=800&q=80',
      features: ['Modern Designs', 'Gallery Quality', 'Ready to Hang'],
      link: '/decorative/aangan-vol-1',
    },
    {
      title: 'Decorative Panels',
      description: 'Elegant decorative panels for walls and partitions',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=80',
      features: ['3D Effects', 'Lightweight', 'Easy to Install'],
      link: '/decorative/aangan-vol-2',
    },
    {
      title: 'Artistic Sculptures',
      description: 'Contemporary sculptures for sophisticated interiors',
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600&q=80',
      features: ['Unique Pieces', 'Premium Finish', 'Statement Decor'],
      link: '/decorative/aangan-vol-3',
    },
  ];

  return (
    <div className="decorative page-transition">
      {/* Hero Section */}
      <PageHero
        title="Decorative Items"
        subtitle="Elegant mandala art, decorative accents, and unique pieces to personalize your space"
        breadcrumbs={[{ label: 'Decorative Items' }]}
        variant="secondary"
        backgroundImage="https://images.unsplash.com/photo-1617104551722-3b2d51366400?auto=format&fit=crop&q=80&w=1920"
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
                        <span className="gallery-category">Artisan Decor</span>
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
                  
                  {/* Static Info */}
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
        <div className="container">
          <ScrollReveal direction="up">
            <div className="cta-content glass-card">
              <h2>Need Custom Decorative Solutions?</h2>
              <p>Our design experts can help you create unique decorative pieces tailored to your style</p>
              <div className="cta-actions">
                <a href="http://wa.me/917069630777" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Contact Our Team
                </a>
                <Link to="/contact" className="btn btn-outline">
                  Get a Quote
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

export default Decorative;
