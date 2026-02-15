import { useState } from 'react';
import { FaPaperPlane, FaCheckCircle, FaEnvelope } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { WEB3FORMS_ACCESS_KEY } from '../config';
import './Newsletter.css';

function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      return;
    }

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
          email: email,
          subject: 'New Newsletter Subscription',
          from_name: 'Aangan Decor Website'
        })
      });

      const result = await response.json();
      
      if (result.success) {
        setIsSubmitted(true);
        setEmail('');
        
        // Reset after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        console.error('Submission failed:', result);
        alert('Something went wrong. Please try again later.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form. Please check your connection.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="newsletter-section section-lg">
      <div className="container">
        <motion.div 
          className="newsletter-glass-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="newsletter-decor-icon">
            <FaEnvelope />
          </div>
          
          <div className="newsletter-header">
            <h2 className="gradient-text-animated">Stay Updated</h2>
            <p>Join our exclusive community for the latest interior trends, premium releases, and special offers.</p>
          </div>

          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="form"
                className="newsletter-premium-form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="input-field-wrapper">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="premium-input"
                  />
                  <button
                    type="submit"
                    className="premium-submit-btn"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="loading-dots">
                        <span></span><span></span><span></span>
                      </div>
                    ) : (
                      <>
                        <span className="btn-text">Inspire Me</span>
                        <FaPaperPlane className="icon-slant" />
                      </>
                    )}
                  </button>
                </div>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                className="newsletter-premium-success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
              >
                <div className="success-icon-wrap">
                  <FaCheckCircle />
                </div>
                <h3>Welcome to the Aangan Circle!</h3>
                <p>You'll be the first to know about our premium collections.</p>
              </motion.div>
            )}
          </AnimatePresence>
          
          <div className="newsletter-footer">
            <p>We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Newsletter;
