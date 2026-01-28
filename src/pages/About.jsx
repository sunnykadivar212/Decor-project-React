import { FaCheckCircle, FaUsers, FaAward, FaHeart } from 'react-icons/fa';
import PageHero from '../components/PageHero';
import ScrollReveal from '../components/ScrollReveal';
import AnimatedCard from '../components/AnimatedCard';
import './About.css';
import Newsletter from '../components/Newsletter';

function About() {
  const stats = [
    { icon: <FaUsers />, number: '500+', label: 'Happy Clients' },
    { icon: <FaAward />, number: '15+', label: 'Years Experience' },
    { icon: <FaCheckCircle />, number: '1000+', label: 'Projects Completed' },
    { icon: <FaHeart />, number: '100%', label: 'Satisfaction Rate' },
  ];

  const values = [
    {
      title: 'Quality First',
      description: 'We source only the finest materials and work with trusted manufacturers to ensure premium quality in every product.',
    },
    {
      title: 'Customer Focused',
      description: 'Your vision is our priority. We provide personalized service and expert guidance throughout your project.',
    },
    {
      title: 'Innovation',
      description: 'Staying ahead of design trends, we bring you the latest in interior and decorative solutions.',
    },
    {
      title: 'Sustainability',
      description: 'Committed to eco-friendly practices, we offer sustainable options that are kind to our planet.',
    },
  ];

  return (
    <div className="about page-transition">
      {/* Hero Section */}
      <PageHero
        title="About Aangan Decor"
        subtitle="Transforming spaces with premium materials and exceptional craftsmanship since 2009"
        breadcrumbs={[{ label: 'About' }]}
        variant="primary"
      />

      {/* Story Section */}
      <section className="story-section section bg-mesh">
        <div className="container">
          <div className="story-grid">
            <ScrollReveal direction="left">
              <div className="story-image gold-shine">
                <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80" alt="Our Story" />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="story-content">
                <h2>Our Story</h2>
                <p>
                  Founded with a passion for transforming spaces, Aangan Decor has been at the forefront 
                  of providing premium interior materials and decorative solutions for over 15 years.
                </p>
                <p>
                  What started as a small venture has grown into a trusted name in the industry, 
                  serving hundreds of satisfied clients across the region. Our commitment to quality, 
                  innovation, and customer satisfaction has been the cornerstone of our success.
                </p>
                <p>
                  Today, we specialize in two main categories: Interior Items including premium plywood 
                  and laminates, and Decorative Items featuring unique mandala art and elegant accents. 
                  Each product is carefully selected to meet the highest standards of quality and design.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <ScrollReveal key={stat.label} direction="scale" delay={index * 0.1}>
                <div className="stat-item glass-card hover-scale-glow">
                  <div className="stat-icon glow-primary">{stat.icon}</div>
                  <div className="stat-number gradient-text-gold">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section section bg-mesh-intense">
        <div className="container">
          <ScrollReveal direction="up">
            <div className="section-header">
              <h2 className="gradient-text-animated">Our Values</h2>
              <p>The principles that guide everything we do</p>
            </div>
          </ScrollReveal>

          <div className="values-grid">
            {values.map((value, index) => (
              <ScrollReveal key={value.title} direction="up" delay={index * 0.1}>
                <AnimatedCard 
                  tiltEnabled={true}
                  className="value-card"
                >
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </AnimatedCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      
      <Newsletter />
    </div>
  );
}

export default About;
