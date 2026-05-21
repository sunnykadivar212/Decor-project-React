import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaStar, FaCheckCircle, FaLeaf, FaTruck, FaMedal, FaHome, FaQuoteLeft } from 'react-icons/fa';
import ScrollReveal from '../components/ScrollReveal';
import AnimatedCard from '../components/AnimatedCard';
import GradientButton from '../components/GradientButton';
import TestimonialsCarousel from '../components/TestimonialsCarousel';
import './Home.css';
import Newsletter from '../components/Newsletter';

function Home() {
  const categories = [
    {
      title: 'Interior Items',
      description: 'Premium plywood, laminates, and materials for stunning interiors',
      image: 'https://images.unsplash.com/photo-1615873968403-89e068629265?w=800&q=80',
      link: '/interior',
      color: '#2C5F2D',
    },
    {
      title: 'Decorative Items',
      description: 'Elegant mandala art, decorative accents, and unique pieces',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80',
      link: '/decorative',
      color: '#D4A574',
    },
  ];

  const features = [
    { icon: <FaMedal />, title: 'Premium Quality', text: 'Handpicked ISI-grade materials sourced from top manufacturers' },
    { icon: <FaHome />, title: 'Expert Design', text: 'Professional interior guidance by seasoned design consultants' },
    { icon: <FaTruck />, title: 'Fast Delivery', text: 'On-time project delivery with careful logistics handling' },
    { icon: <FaLeaf />, title: 'Eco-Conscious', text: 'Sustainably sourced materials with minimal environmental impact' },
  ];

  const galleryFrames = [
    {
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80',
      label: 'Living Room',
      tag: 'Interior Design',
    },
    {
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
      label: 'Luxury Sofa',
      tag: 'Furniture',
    },
    {
      image: 'https://images.unsplash.com/photo-1549490349-8643362247b5?w=800&q=80',
      label: 'Mandala Art',
      tag: 'Decorative',
    },
    {
      image: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=800&q=80',
      label: 'Designer Lights',
      tag: 'Lighting',
    },
    {
      image: 'https://images.unsplash.com/photo-1615873968403-89e068629265?w=800&q=80',
      label: 'Premium Laminates',
      tag: 'Interior',
    },
    {
      image: 'https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=800&q=80',
      label: 'Dining Table',
      tag: 'Furniture',
    },
  ];

  return (
    <div className="home">
      {/* Hero Section - Simple & Elegant */}
      <section className="hero-simple">
        <div className="hero-background-image">
          <img 
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&q=80" 
            alt="Elegant Interior"
          />
          <div className="hero-overlay"></div>
        </div>
        
        <div className="container">
          <motion.div 
            className="hero-content-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="hero-badge"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <FaStar />
              <span>Premium Decor Solutions</span>
            </motion.div>

            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Transform Your Space with <br className="hidden-mobile"/>
              <span className="title-highlight"> Elegant Design</span>
            </motion.h1>

            <motion.p 
              className="hero-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              "At Aangan, we don't just design interiors — we craft moods, and build timeless spaces"
            </motion.p>

            <motion.div 
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Link to="/interior">
                <GradientButton variant="primary" size="large">
                  Explore Collections
                  <FaArrowRight />
                </GradientButton>
              </Link>
              <Link to="/contact">
                <GradientButton variant="outline" size="large">
                  Get Consultation
                </GradientButton>
              </Link>
            </motion.div>

            <motion.div 
              className="hero-features"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div className="feature-badge">
                <FaCheckCircle />
                <span>15+ Years Experience</span>
              </div>
              <div className="feature-badge">
                <FaCheckCircle />
                <span>5000+ Projects</span>
              </div>
              <div className="feature-badge">
                <FaCheckCircle />
                <span>Premium Quality</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section section">
        <div className="container">
          <ScrollReveal direction="up">
            <div className="section-header">
              <h2 className="gradient-text-animated">Our Collections</h2>
              <p>Explore our two main categories of premium decor &amp; interior products</p>
            </div>
          </ScrollReveal>

          <div className="categories-grid">
            {categories.map((category, index) => (
              <ScrollReveal key={category.title} direction="up" delay={index * 0.2}>
                <AnimatedCard 
                  tiltEnabled={true}
                  gradientBorder={true}
                  className="category-card"
                >
                  <div className="category-image">
                    <img src={category.image} alt={category.title} />
                  </div>
                  <div className="category-content">
                    <h3>{category.title}</h3>
                    <p>{category.description}</p>
                    <Link to={category.link} className="category-link magnetic">
                      Explore Collection
                      <FaArrowRight />
                    </Link>
                  </div>
                </AnimatedCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Framed Gallery Section */}
      <section className="framed-gallery-section section">
        <div className="container">
          <ScrollReveal direction="up">
            <div className="section-header">
              <span className="section-eyebrow">Portfolio Showcase</span>
              <h2>From Our Portfolio</h2>
              <p>A glimpse into the spaces we have transformed with artisanal craftsmanship</p>
            </div>
          </ScrollReveal>
          <div className="framed-gallery-grid">
            {galleryFrames.map((frame, index) => (
              <ScrollReveal key={frame.label} direction="up" delay={index * 0.08}>
                <div className="framed-picture">
                  <div className="frame-border">
                    <div className="frame-inner">
                      <img src={frame.image} alt={frame.label} className="frame-img" />
                      <div className="frame-overlay">
                        <span className="frame-tag">{frame.tag}</span>
                        <h4 className="frame-label">{frame.label}</h4>
                      </div>
                    </div>
                  </div>
                  <div className="frame-caption">
                    <div className="caption-dot"></div>
                    <span>{frame.label}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal direction="up">
            <div className="gallery-cta-row">
              <Link to="/interior" className="btn btn-primary">View Interior Range</Link>
              <Link to="/decorative" className="btn btn-outline">Browse Decorative Items</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section section-sm bg-mesh-intense">
        <div className="container">
          <ScrollReveal direction="up">
            <div className="section-header">
              <span className="section-eyebrow">Why Choose Us</span>
              <h2>The Aangan Difference</h2>
            </div>
          </ScrollReveal>
          <div className="features-grid">
            {features.map((feature, index) => (
              <ScrollReveal key={feature.title} direction="scale" delay={index * 0.1}>
                <div className="feature-item">
                  <div className="feature-icon-wrap">
                    <div className="feature-icon">{feature.icon}</div>
                  </div>
                  <h4>{feature.title}</h4>
                  <p>{feature.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-bg-image">
          <img src="https://images.unsplash.com/photo-1615873968403-89e068629265?w=1600&q=80" alt="CTA Background" />
          <div className="cta-bg-overlay"></div>
        </div>
        <div className="container">
          <ScrollReveal direction="up">
            <div className="cta-content">
              <FaQuoteLeft className="cta-quote-icon" />
              <h2>Ready to Transform Your Space?</h2>
              <p>Get in touch with our design experts for personalized solutions tailored to your vision</p>
              <div className="cta-actions">
                <Link to="/contact">
                  <GradientButton variant="gold" size="large">
                    Contact Us Today
                  </GradientButton>
                </Link>
                <a href="http://wa.me/917069621777" target="_blank" rel="noopener noreferrer">
                  <GradientButton variant="secondary" size="large">
                    WhatsApp Us
                  </GradientButton>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <TestimonialsCarousel />
      
      <Newsletter />
      
    </div>
  );
}

export default Home;
