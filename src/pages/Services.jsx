import { FaPaintBrush, FaRulerCombined, FaTruck, FaTools, FaLightbulb, FaHandshake, FaKey, FaDraftingCompass, FaCube } from 'react-icons/fa';
import PageHero from '../components/PageHero';
import ScrollReveal from '../components/ScrollReveal';
import AnimatedCard from '../components/AnimatedCard';
import GradientButton from '../components/GradientButton';
import ParticlesBackground from '../components/ParticlesBackground';
import './Services.css';

function Services() {
  const services = [
    {
      icon: <FaKey />,
      title: 'Turn-Key Projects',
      description: 'Fixed cost contract where you can "turn the key" to a fully operational facility when the project is completed. Complete end-to-end project execution with quality control.',
      features: ['Fixed Cost Contract', 'Complete Project Delivery', 'Quality Assurance'],
      link: '/turnkey-projects',
    },
    {
      icon: <FaDraftingCompass />,
      title: '2D Planning',
      description: 'Smart spaces start with smart plans - our 2D layouts bring your vision to life with clarity and precision.',
      features: ['Detailed Layouts', 'Clear Visualization', 'Precise Measurements'],
    },
    {
      icon: <FaCube />,
      title: '3D Planning',
      description: 'Experience your space before it\'s built - our 3D planning brings designs to life with stunning realism.',
      features: ['Realistic Visualization', 'Virtual Walkthrough', 'Design Refinement'],
    },
    {
      icon: <FaPaintBrush />,
      title: 'Material Supply',
      description: 'Premium quality plywood, laminates, acrylic, and decorative materials sourced from trusted manufacturers.',
      features: ['Wide Selection', 'Quality Assured', 'Competitive Pricing'],
    },
    {
      icon: <FaRulerCombined />,
      title: 'Custom Design',
      description: 'Personalized design solutions tailored to your unique style and space requirements.',
      features: ['Expert Consultation', 'Custom Solutions', '3D Visualization'],
    },
    {
      icon: <FaTruck />,
      title: 'Delivery Service',
      description: 'Reliable and timely delivery of materials to your doorstep with proper handling and care.',
      features: ['Fast Delivery', 'Safe Handling', 'Tracking Available'],
    },
    {
      icon: <FaTools />,
      title: 'Installation Support',
      description: 'Professional guidance and support for proper installation of materials and decorative items.',
      features: ['Expert Guidance', 'Installation Tips', 'Technical Support'],
    },
    {
      icon: <FaLightbulb />,
      title: 'Design Consultation',
      description: 'Free consultation to help you choose the perfect materials and designs for your project.',
      features: ['Free Consultation', 'Expert Advice', 'Trend Insights'],
    },
    {
      icon: <FaHandshake />,
      title: 'After-Sales Support',
      description: 'Dedicated support even after purchase to ensure your complete satisfaction.',
      features: ['Warranty Support', 'Maintenance Tips', 'Customer Care'],
    },
  ];

  return (
    <div className="services page-transition">
      {/* Hero Section */}
      <PageHero
        title="Our Services"
        subtitle="Comprehensive solutions for all your interior and decorative needs"
        breadcrumbs={[{ label: 'Services' }]}
        variant="primary"
      />

      {/* Services Grid */}
      <section className="services-section section bg-mesh">
        <div className="container">
          <ScrollReveal direction="up">
            <div className="section-header">
              <h2 className="gradient-text-animated">What We Offer</h2>
              <p>End-to-end services to bring your vision to life</p>
            </div>
          </ScrollReveal>

          <div className="services-grid">
            {services.map((service, index) => (
              <ScrollReveal key={service.title} direction="up" delay={index * 0.1}>
                <AnimatedCard 
                  tiltEnabled={true}
                  className={`service-card ${service.link ? 'service-card-clickable' : ''}`}
                  onClick={service.link ? () => window.location.href = service.link : undefined}
                >
                  <div className="service-icon glow-primary">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul className="service-features">
                    {service.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                  {service.link && (
                    <div className="service-link">
                      Learn More →
                    </div>
                  )}
                </AnimatedCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section section bg-mesh-intense">
        <div className="container">
          <ScrollReveal direction="up">
            <div className="section-header">
              <h2>Our Process</h2>
              <p>Simple steps to transform your space</p>
            </div>
          </ScrollReveal>

          <div className="process-timeline">
            {[
              { step: '01', title: 'Consultation', description: 'Discuss your vision and requirements with our experts' },
              { step: '02', title: 'Selection', description: 'Choose from our wide range of premium materials' },
              { step: '03', title: 'Customization', description: 'Personalize designs to match your style' },
              { step: '04', title: 'Delivery', description: 'Receive materials safely at your doorstep' },
            ].map((item, index) => (
              <ScrollReveal key={item.step} direction="right" delay={index * 0.15}>
                <div className="process-item glass-card-light">
                  <div className="process-step gradient-text-gold">{item.step}</div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section section-sm">
        <ParticlesBackground id="services-cta-particles" />
        <div className="container">
          <ScrollReveal direction="scale">
            <div className="cta-content glass-card-dark">
              <h2>Ready to Get Started?</h2>
              <p>Let's discuss how we can help transform your space with our premium materials and services</p>
              <div className="cta-actions">
                <GradientButton 
                  variant="secondary" 
                  size="large"
                  onClick={() => window.location.href = 'http://wa.me/917069630777'}
                >
                  Contact Us Now
                </GradientButton>
                <GradientButton 
                  variant="outline" 
                  size="large"
                  onClick={() => window.location.href = '/contact'}
                >
                  Request a Quote
                </GradientButton>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

export default Services;
