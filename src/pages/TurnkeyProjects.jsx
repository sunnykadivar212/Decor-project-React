// Force update
import { motion } from 'framer-motion';
import { FaKey, FaClipboardCheck, FaUsers, FaClock, FaCheckCircle, FaTools, FaPaintBrush, FaHardHat, FaChartLine, FaHandshake, FaArrowRight } from 'react-icons/fa';
import ScrollReveal from '../components/ScrollReveal';
import AnimatedCard from '../components/AnimatedCard';
import GradientButton from '../components/GradientButton';
import './TurnkeyProjects.css';

function TurnkeyProjects() {
  const projectTypes = [
    {
      id: 'residential',
      icon: <FaPaintBrush />,
      title: 'Residential',
      subtitle: 'Luxury Living Spaces',
      description: 'We craft bespoke homes that reflect your personality. From penthouse interiors to sprawling villas, our residential turnkey solutions cover every detail.',
      tags: ['Villas', 'Apartments', 'Penthouses'],
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800', // Placeholder
      size: 'large' // Spans 2 cols
    },
    {
      id: 'commercial',
      icon: <FaHardHat />,
      title: 'Commercial',
      subtitle: 'Modern Workspaces',
      description: 'Productivity meets aesthetics. We design offices and retail spaces that inspire innovation and impress clients.',
      tags: ['Offices', 'Retail', 'Coworking'],
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
      size: 'medium'
    },
    {
      id: 'institutional',
      icon: <FaChartLine />,
      title: 'Institutional',
      subtitle: 'Public & Edu Spaces',
      description: 'Functional, durable, and inspiring designs for educational and healthcare institutions.',
      tags: ['Schools', 'Hospitals', 'Libraries'],
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=800', // Placeholder
      size: 'medium'
    },
  ];

  const processSteps = [
    { num: '01', title: 'Consultation', desc: 'We meet to understand your vision, budget, and timeline.' },
    { num: '02', title: 'Design & Plan', desc: 'Our architects create 3D visualizations and detailed blueprints.' },
    { num: '03', title: 'Procurement', desc: 'Sourcing premium materials from our trusted global network.' },
    { num: '04', title: 'Execution', desc: 'Our skilled craftsmen bring the design to life on-site.' },
    { num: '05', title: 'Handover', desc: 'Final quality checks and handing over your ready-to-use space.' },
  ];

  return (
    <div className="turnkey-page">
      {/* Immersive Hero Section */}
      <section className="turnkey-hero">
        <div className="hero-bg-overlay"></div>
        <div className="container hero-content-wrapper">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-text-block"
          >
            <span className="hero-subtitle">End-to-End Solutions</span>
            <h1 className="hero-title">From Concept <br/> to <span className="text-gold">Creation</span></h1>
            <p className="hero-desc">
              Experience the ease of a Turnkey solution. We handle the chaos of construction 
              so you can enjoy the art of living. One team, one vision, zero stress.
            </p>
          </motion.div>
        </div>
        <div className="hero-scroll-indicator">
          <span>Scroll to Explore</span>
          <div className="line"></div>
        </div>
      </section>

      {/* Intro Stats Section */}
      <section className="turnkey-intro section">
        <div className="container">
          <div className="intro-grid">
             <div className="intro-text-side">
               <h2>What is Turnkey?</h2>
               <p>
                 A "Turnkey" project means you turn the key to a fully finished door. 
                 We take specific responsibility for the entire project from design to completion. 
                 No juggling multiple contractors, no material sourcing headaches—just peace of mind.
               </p>
               <div className="benefits-list">
                 <div className="benefit-item">
                   <FaCheckCircle className="icon-gold"/> <span>Single Point of Contact</span>
                 </div>
                 <div className="benefit-item">
                   <FaCheckCircle className="icon-gold"/> <span>Fixed Cost & Timeline</span>
                 </div>
                 <div className="benefit-item">
                   <FaCheckCircle className="icon-gold"/> <span>Quality Guarantee</span>
                 </div>
               </div>
             </div>
             <div className="intro-stats-side">
                <div className="stat-card">
                  <h3>100+</h3>
                  <p>Projects Delivered</p>
                </div>
                <div className="stat-card">
                  <h3>15+</h3>
                  <p>Years Experience</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Bento Grid - Project Types */}
      <section className="section bg-dark text-white bento-section">
         <div className="container">
            <div className="section-head text-center mb-5">
              <h2 className="display-4">Our Expertise</h2>
              <p className="text-muted">Tailored solutions for every sector</p>
            </div>
            
            <div className="bento-grid">
               {projectTypes.map((project, idx) => (
                 <motion.div
                   key={project.id}
                   className={`bento-card ${project.size}`}
                   initial={{ opacity: 0, y: 50 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: idx * 0.1, duration: 0.6 }}
                   whileHover={{ y: -5 }}
                 >
                    <div className="card-bg-image" style={{backgroundImage: `url(${project.image})`}}></div>
                    <div className="card-overlay"></div>
                    <div className="card-content">
                      <div className="card-icon">{project.icon}</div>
                      <h3>{project.title}</h3>
                      <p className="card-subtitle">{project.subtitle}</p>
                      <p className="card-desc">{project.description}</p>
                      <div className="card-tags">
                        {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                      </div>
                    </div>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* Visual Roadmap - Process */}
      <section className="section process-section">
        <div className="container">
           <div className="section-head mb-5">
              <h2>The Journey</h2>
              <p>How we bring your dream to reality</p>
           </div>
           
           <div className="process-timeline-visual">
              {processSteps.map((step, index) => (
                <ScrollReveal key={step.num} direction="up" delay={index * 0.1}>
                  <div className="process-step">
                     <div className="step-num">{step.num}</div>
                     <div className="step-content">
                       <h4>{step.title}</h4>
                       <p>{step.desc}</p>
                     </div>
                     {index !== processSteps.length - 1 && <div className="step-connector"></div>}
                  </div>
                </ScrollReveal>
              ))}
           </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section turnkey-cta bg-mesh-dark">
        <div className="container cta-container">
           <h2>Ready to Build?</h2>
           <p>Let's discuss your upcoming project. Our experts are ready to guide you.</p>
           <div className="cta-btn-group">
              <GradientButton size="large" onClick={() => window.location.href='/contact'}>
                 Book Consultation <FaArrowRight style={{marginLeft: '10px'}}/>
              </GradientButton>
           </div>
        </div>
      </section>

    </div>
  );
}

export default TurnkeyProjects;
