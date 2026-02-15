import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaStar, FaCheckCircle } from 'react-icons/fa';
import ScrollReveal from '../components/ScrollReveal';
import AnimatedCard from '../components/AnimatedCard';
import GradientButton from '../components/GradientButton';
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
    { icon: <FaCheckCircle />, title: 'Premium Quality', text: 'Handpicked materials' },
    { icon: <FaCheckCircle />, title: 'Expert Design', text: 'Professional guidance' },
    { icon: <FaCheckCircle />, title: 'Fast Delivery', text: 'Quick turnaround' },
    { icon: <FaCheckCircle />, title: 'Best Prices', text: 'Competitive rates' },
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
              <p>Explore our two main categories of premium products</p>
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

      {/* Features Section */}
      <section className="features-section section-sm bg-mesh-intense">
        <div className="container">
          <div className="features-grid">
            {features.map((feature, index) => (
              <ScrollReveal key={feature.title} direction="scale" delay={index * 0.1}>
                <div className="feature-item glass-card hover-scale-glow">
                  <div className="feature-icon glow-primary">{feature.icon}</div>
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
        {/* Particles Removed */}
        <div className="container">
          <ScrollReveal direction="up">
            <div className="cta-content glass-card-dark">
              <h2 className="gradient-text-gold">Ready to Transform Your Space?</h2>
              <p>Get in touch with our experts for personalized design solutions</p>
              <div className="cta-actions">
                <Link to="/contact">
                  <GradientButton variant="gold" size="large">
                    Contact Us Today
                  </GradientButton>
                </Link>
                <a href="http://wa.me/917069630777" target="_blank" rel="noopener noreferrer">
                  <GradientButton variant="secondary" size="large">
                    WhatsApp Us
                  </GradientButton>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
      
      <Newsletter />
      
    </div>
  );
}

export default Home;
