import { Link } from 'react-router-dom';
import { FaArrowRight, FaWhatsapp, FaDownload } from 'react-icons/fa';
import PageHero from '../components/PageHero';
import ScrollReveal from '../components/ScrollReveal';
import AnimatedCard from '../components/AnimatedCard';
import ParticlesBackground from '../components/ParticlesBackground';
import './Interior.css';
import Newsletter from '../components/Newsletter';

function Interior() {
  const products = [
    {
      title: 'Premium Plywood',
      description: 'High-quality plywood for durable and elegant furniture',
      image: 'https://images.unsplash.com/photo-1615873968403-89e068629265?w=600&q=80',
      features: ['Waterproof', 'Termite Resistant', 'Multiple Thickness'],
      link: '/aangan-plywood',
    },
    {
      title: 'Plain Laminates',
      description: 'Smooth, elegant laminates in various colors',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80',
      features: ['Scratch Resistant', 'Easy Maintenance', 'Wide Color Range'],
      link: '/aangan-plain-laminate',
    },
    {
      title: 'Mocco Laminates',
      description: 'Textured laminates with sophisticated patterns',
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80',
      features: ['Unique Textures', 'Premium Finish', 'Durable Surface'],
      link: '/aangan-mocco-laminate',
    },
    {
      title: 'Acrylic Sheets',
      description: 'Versatile acrylic for modern interior applications',
      image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=600&q=80',
      features: ['High Gloss', 'UV Resistant', 'Multiple Colors'],
      link: '/aangan-acrylic',
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
      link: '/a-fab',
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
                        href="/catalogs/interior-catalog.pdf"
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
        <ParticlesBackground id="interior-cta-particles" />
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
    </div>
  );
}

export default Interior;
