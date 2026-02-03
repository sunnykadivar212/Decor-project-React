import { FaTools, FaDoorClosed, FaGripHorizontal, FaScroll } from 'react-icons/fa';
import PageHero from '../../components/PageHero';
import ScrollReveal from '../../components/ScrollReveal';
import AnimatedCard from '../../components/AnimatedCard';
import './Hardware.css';

function Hardware() {
  const hardwareCategories = [
    {
      icon: <FaTools />,
      title: 'Locks',
      description: 'Premium quality locks for security and style',
      items: ['Door Locks', 'Cabinet Locks', 'Smart Locks', 'Padlocks']
    },
    {
      icon: <FaDoorClosed />,
      title: 'Door Closers',
      description: 'Automatic door closing mechanisms',
      items: ['Hydraulic Closers', 'Concealed Closers', 'Floor Springs', 'Overhead Closers']
    },
    {
      icon: <FaGripHorizontal />,
      title: 'Handles',
      description: 'Elegant handles for doors and cabinets',
      items: ['Door Handles', 'Cabinet Handles', 'Pull Handles', 'Lever Handles']
    },
    {
      icon: <FaScroll />,
      title: 'Channels',
      description: 'Drawer and sliding mechanisms',
      items: [
        'Glass Drawer Channel',
        'Quadro Channel (Under-Mounted Slide)',
        'Tandem Box Channel (Concealed Slides)',
        'Telescopic Channel (Concealed Slides)',
        'Regular (Roller/Side-Mounted)'
      ]
    },
    {
      icon: <FaTools />,
      title: 'Hinges',
      description: 'Quality hinges for smooth operation',
      items: ['Concealed Hinges', 'Cabinet Hinges', 'Door Hinges', 'Soft-Close Hinges']
    },
    {
      icon: <FaTools />,
      title: 'Adhesives',
      description: 'Industrial-grade adhesives',
      items: ['Wood Adhesive', 'Contact Adhesive', 'PVC Adhesive', 'Multi-Purpose Adhesive']
    },
    {
      icon: <FaTools />,
      title: 'Screws & Khili',
      description: 'Essential fastening solutions',
      items: ['Wood Screws', 'Metal Screws', 'Confirmat Screws', 'Minifix Fittings']
    }
  ];

  return (
    <div className="hardware-category page-transition">
      <PageHero
        title="Hardware & Materials"
        subtitle="Quality hardware where every detail is carefully curated to reflect seamless execution and deliver timeless interiors"
        breadcrumbs={[
          { label: 'Shop', link: '/shop' },
          { label: 'Hardware' }
        ]}
        variant="primary"
      />

      <section className="hardware-section section bg-mesh">
        <div className="container">
          <ScrollReveal direction="up">
            <div className="section-header">
              <h2 className="gradient-text-animated">Complete Hardware Solutions</h2>
              <p>Premium quality hardware and materials for professional installations</p>
            </div>
          </ScrollReveal>

          <div className="hardware-grid">
            {hardwareCategories.map((category, index) => (
              <ScrollReveal key={category.title} direction="up" delay={index * 0.1}>
                <AnimatedCard tiltEnabled={true} className="hardware-card">
                  <div className="hardware-icon glow-primary">{category.icon}</div>
                  <h3>{category.title}</h3>
                  <p className="hardware-description">{category.description}</p>
                  <ul className="hardware-items">
                    {category.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </AnimatedCard>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal direction="up" delay={0.3}>
            <div className="hardware-cta glass-card-dark" style={{ marginTop: '3rem', padding: '2rem', textAlign: 'center' }}>
              <h3>Need Hardware Consultation?</h3>
              <p>Our experts can help you choose the right hardware for your project</p>
              <a
                href="http://wa.me/917069621777"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ marginTop: '1rem', display: 'inline-block' }}
              >
                Contact Us on WhatsApp
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

export default Hardware;
