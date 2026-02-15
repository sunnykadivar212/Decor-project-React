import { useState } from 'react';
import { WEB3FORMS_ACCESS_KEY } from '../config';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaPaperPlane } from 'react-icons/fa';
import PageHero from '../components/PageHero';
import ScrollReveal from '../components/ScrollReveal';
import GradientButton from '../components/GradientButton';
import './Contact.css';
import Newsletter from '../components/Newsletter';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          ...formData,
          from_name: 'Aangan Decor Contact Form'
        })
      });

      const result = await response.json();
      
      if (result.success) {
        setIsSuccess(true);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        
        // Reset success state after 5 seconds
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        alert('Submission failed. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form. Please check your connection.');
    } finally {
      setIsLoading(true); // Keep loading state until success transition is complete or just reset
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaPhone />,
      title: 'Phone',
      details: '+91 70696 21777 / +91 70696 22777',
      link: 'tel:917069621777',
    },
    {
      icon: <FaWhatsapp />,
      title: 'WhatsApp',
      details: '+91 70696 21777',
      link: 'http://wa.me/917069621777',
    },
    {
      icon: <FaEnvelope />,
      title: 'Email',
      details: 'aangandecor7@gmail.com',
      link: 'mailto:aangandecor7@gmail.com',
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      details: '3rd Floor, Sky Tower, Upper Sanket India, Nr. Umiya Circle, Morbi 363 641',
      link: '#',
    },
  ];

  return (
    <div className="contact page-transition">
      {/* Hero Section */}
      <PageHero
        title="Get In Touch"
        subtitle="Have a question or ready to start your project? We'd love to hear from you"
        breadcrumbs={[{ label: 'Contact' }]}
        variant="primary"
        backgroundImage="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?auto=format&fit=crop&q=80&w=1920"
      />

      {/* Contact Content */}
      <section className="contact-content section bg-mesh">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Info */}
            <ScrollReveal direction="left">
              <div className="contact-info-section">
                <h2>Contact Information</h2>
                <p className="contact-intro">
                  Reach out to us through any of these channels. We're here to help!
                </p>

                <div className="contact-info-list">
                  {contactInfo.map((info, index) => (
                    <ScrollReveal key={info.title} direction="up" delay={index * 0.1}>
                      <a
                        href={info.link}
                        className="contact-info-item glass-card hover-scale-glow"
                        target={info.link.startsWith('http') ? '_blank' : undefined}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        <div className="contact-icon glow-primary">{info.icon}</div>
                        <div className="contact-details">
                          <h4>{info.title}</h4>
                          <p>{info.details}</p>
                        </div>
                      </a>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Contact Form */}
            <ScrollReveal direction="right">
              <div className="contact-form-section glass-card">
                {isSuccess ? (
                  <div className="contact-success-message">
                    <div className="success-icon-wrap">
                      <FaPaperPlane />
                    </div>
                    <h2>Message Sent!</h2>
                    <p>Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="name">Name *</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Your name"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Email *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 12345 67890"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="subject">Subject *</label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          placeholder="How can we help?"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="message">Message *</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="6"
                        placeholder="Tell us more about your project..."
                      ></textarea>
                    </div>

                    <GradientButton 
                      type="submit" 
                      variant="primary" 
                      size="large"
                      loading={isLoading}
                    >
                      <FaPaperPlane />
                      {isLoading ? 'Sending...' : 'Send Message'}
                    </GradientButton>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      
      <Newsletter />
    </div>
  );
}

export default Contact;
