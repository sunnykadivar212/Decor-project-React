import { Link } from 'react-router-dom';
import { FaArrowRight, FaWhatsapp, FaDownload } from 'react-icons/fa';
import PageHero from '../components/PageHero';
import ScrollReveal from '../components/ScrollReveal';
import AnimatedCard from '../components/AnimatedCard';
import ParticlesBackground from '../components/ParticlesBackground';
import './Decorative.css';
import Newsletter from '../components/Newsletter';

function Decorative() {
  const products = [
    {
      title: 'Mandala Art',
      description: 'Intricate handcrafted mandala designs for wall decoration',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&q=80',
      features: ['Handcrafted', 'Multiple Sizes', 'Custom Colors'],
      link: '/mandala-art',
    },
    {
      title: 'Decorative Accents',
      description: 'Unique decorative pieces to enhance your space',
      image: 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=600&q=80',
      features: ['Unique Designs', 'Premium Materials', 'Easy Installation'],
      link: '/aangan-decorative',
    },
    {
      title: 'Indoor Plants',
      description: 'Beautiful plants to bring life to your interiors',
      image: 'https://images.unsplash.com/photo-1463320726281-696a485928c7?w=600&q=80',
      features: ['Low Maintenance', 'Air Purifying', 'Various Sizes'],
      link: '/plants',
    },
    {
      title: 'Wall Art Collection',
      description: 'Curated wall art pieces for modern spaces',
      image: 'https://images.unsplash.com/photo-1582561833896-d1c6d3a3f1a8?w=600&q=80',
      features: ['Modern Designs', 'Gallery Quality', 'Ready to Hang'],
      link: '/aangan-vol-1',
    },
    {
      title: 'Decorative Panels',
      description: 'Elegant decorative panels for walls and partitions',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=80',
      features: ['3D Effects', 'Lightweight', 'Easy to Install'],
      link: '/aangan-vol-2',
    },
    {
      title: 'Artistic Sculptures',
      description: 'Contemporary sculptures for sophisticated interiors',
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600&q=80',
      features: ['Unique Pieces', 'Premium Finish', 'Statement Decor'],
      link: '/aangan-vol-3',
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
      />

      {/* Products Section */}
      <section className="products-section section bg-mesh">
        <div className="container">
          <div className="products-grid">
            {products.map((product, index) => (
              <ScrollReveal key={product.title} direction="up" delay={index * 0.1}>
                <AnimatedCard 
                  tiltEnabled={true}
                  className="product-card"
                >
                  <div className="product-image">
                    <img src={product.image} alt={product.title} />
                    <div className="product-overlay">
                      <Link to={product.link} className="view-details-btn magnetic">
                        View Details
                        <FaArrowRight />
                      </Link>
                    </div>
                  </div>
                  <div className="product-content">
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                    <ul className="product-features">
                      {product.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                    <div className="product-actions">
                      <a 
                        href={`http://wa.me/917069630777?text=Hi, I'm interested in ${product.title}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="whatsapp-btn"
                      >
                        <FaWhatsapp /> Inquire
                      </a>
                      <a 
                        href="/catalogs/decorative-catalog.pdf"
                        download
                        className="download-btn"
                      >
                        <FaDownload /> Catalog
                      </a>
                    </div>
                  </div>
                </AnimatedCard>
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
    </div>
  );
}

export default Decorative;
