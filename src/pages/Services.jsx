import { motion } from 'framer-motion';
import { FaCheckCircle, FaPaintBrush, FaRuler, FaTools } from 'react-icons/fa';
import PageHero from '../components/PageHero';
import './Services.css';

function Services() {
  const services = [
    {
      id: 'service1',
      icon: <FaPaintBrush />,
      title: 'Planning Design',
      description: 'Expert planning and design services to bring your vision to life with precision and creativity.',
      features: [
        'Conceptual Design',
        '3D Visualization',
        'Material Selection',
        'Budget Planning',
      ],
    },
    {
      id: 'service2',
      icon: <FaRuler />,
      title: 'Interior Design',
      description: 'Complete interior design solutions tailored to your style, space, and requirements.',
      features: [
        'Space Planning',
        'Color Consultation',
        'Furniture Selection',
        'Lighting Design',
      ],
    },
    {
      id: 'service3',
      icon: <FaTools />,
      title: 'Turnkey Projects',
      description: 'End-to-end project execution from concept to completion with full project management.',
      features: [
        'Complete Execution',
        'Quality Assurance',
        'Timely Delivery',
        'Post-Installation Support',
      ],
    },
  ];

  return (
    <div className="services page-transition">
      {/* Hero Section */}
      <PageHero
        title="Our Services"
        subtitle="Comprehensive design and execution services for your dream space"
        breadcrumbs={[{ label: 'Services' }]}
        variant="primary"
      />

      {/* Services Section */}
      <section className="services-section section">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                className="service-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature) => (
                    <li key={feature}>
                      <FaCheckCircle />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta">
        <div className="container">
          <motion.div
            className="cta-box"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Ready to Start Your Project?</h2>
            <p>Let's discuss how we can help transform your space</p>
            <div className="cta-actions">
              <a href="http://wa.me/917069630777" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Get Started
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Services;
