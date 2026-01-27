import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaStar, FaCheckCircle } from 'react-icons/fa';
import './Home.css';

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
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <motion.div
            className="hero-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
        </div>
        
        <div className="container">
          <div className="hero-content">
            <motion.div
              className="hero-text"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                className="hero-badge"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <FaStar /> Premium Decor Solutions
              </motion.div>
              
              <h1 className="hero-title">
                Transform Your Space with
                <span className="gradient-text"> Elegant Design</span>
              </h1>
              
              <p className="hero-description">
                Discover premium interior materials and decorative accents that bring 
                sophistication and style to every corner of your home or office.
              </p>
              
              <div className="hero-actions">
                <Link to="/interior" className="btn btn-primary">
                  Explore Interior Items
                  <FaArrowRight />
                </Link>
                <Link to="/decorative" className="btn btn-outline">
                  View Decorative Items
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="hero-image"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="hero-image-wrapper">
                <img 
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80" 
                  alt="Elegant Interior Design"
                />
                <div className="hero-image-decoration"></div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating Elements */}
        <motion.div
          className="floating-element floating-1"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="floating-element floating-2"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </section>

      {/* Categories Section */}
      <section className="categories-section section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Our Collections</h2>
            <p>Explore our two main categories of premium products</p>
          </motion.div>

          <div className="categories-grid">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                className="category-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <div className="category-image">
                  <img src={category.image} alt={category.title} />
                  <div className="category-overlay" style={{ background: `linear-gradient(135deg, ${category.color}dd, ${category.color}99)` }}></div>
                </div>
                <div className="category-content">
                  <h3>{category.title}</h3>
                  <p>{category.description}</p>
                  <Link to={category.link} className="category-link">
                    Explore Collection
                    <FaArrowRight />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section section-sm">
        <div className="container">
          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="feature-item"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h4>{feature.title}</h4>
                <p>{feature.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Ready to Transform Your Space?</h2>
            <p>Get in touch with our experts for personalized design solutions</p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary">
                Contact Us Today
              </Link>
              <a href="http://wa.me/917069630777" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Home;
