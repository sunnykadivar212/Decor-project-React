import { useState } from 'react';
import { WEB3FORMS_ACCESS_KEY } from '../../config/config';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaPaperPlane } from 'react-icons/fa';
import PageHero from '../../components/common/PageHero/PageHero';
import ScrollReveal from '../../components/common/ScrollReveal/ScrollReveal';
import GradientButton from '../../components/common/GradientButton/GradientButton';
import './Contact.css';
import Newsletter from '../../components/features/Newsletter/Newsletter';

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
      details: 'Umiya Circle, Sanala Rd, Patel Colony, Vaibhav Nagar Society, Sanala, Morbi, Gujarat 363641',
      link: 'https://www.google.com/maps/place/AANGAN+DECOR/@22.8009269,70.8162366,17z/data=!4m14!1m7!3m6!1s0x39598d0074e4713b:0x2feeedf7a891372f!2sAANGAN+DECOR!8m2!3d22.8009269!4d70.8162366!16s%2Fg%2F11lymc8fjk!3m5!1s0x39598d0074e4713b:0x2feeedf7a891372f!8m2!3d22.8009269!4d70.8162366!16s%2Fg%2F11lymc8fjk?authuser=0&entry=ttu',
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
        backgroundImage="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=85&w=1920"
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

      {/* Map Section */}
      <section className="contact-map-section">
        <div className="container">
          <ScrollReveal direction="up">
            <div className="contact-map-card glass">
              <div className="contact-map-header">
                <h2>Find Our Showroom</h2>
                <p>Visit us to explore our collections in person. We are located in the heart of Morbi's business district.</p>
              </div>
              <div className="map-wrapper">
                <iframe
                  title="Aangan Decor Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.222765376516!2d70.8162366!3d22.8009269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39598d0074e4713b%3A0x2feeedf7a891372f!2sAANGAN%20DECOR!5e0!3m2!1sen!2sin!4v1716300000000!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Newsletter />
    </div>
  );
}

export default Contact;
