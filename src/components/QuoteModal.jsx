import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';
import { WEB3FORMS_ACCESS_KEY } from '../config';
import './QuoteModal.css';

function QuoteModal({ isOpen, onClose, productTitle = 'Custom Inquiry' }) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: `I would like to get a quote for ${productTitle}.`,
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
          subject: `Quote Request: ${productTitle}`,
          from_name: 'Aangan Decor Quote Modal',
          ...formData
        })
      });

      const result = await response.json();
      
      if (result.success) {
        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
          onClose();
          setFormData({ name: '', email: '', phone: '', message: '' });
        }, 3000);
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting quote:', error);
      alert('Error submitting request. Please check your connection.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div 
            className="quote-modal"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-modal" onClick={onClose} aria-label="Close modal">
              <FaTimes />
            </button>

            {isSuccess ? (
              <div className="modal-success">
                <div className="success-icon-wrap">
                  <FaCheckCircle />
                </div>
                <h2>Quote Request Sent!</h2>
                <p>We've received your request for <strong>{productTitle}</strong>. An expert will contact you shortly.</p>
              </div>
            ) : (
              <div className="modal-content">
                <div className="modal-header">
                  <span className="modal-tag">Get a Quote</span>
                  <h2>{productTitle}</h2>
                  <p>Fill out the form below and our design consultants will get back to you with a custom quote.</p>
                </div>

                <form onSubmit={handleSubmit} className="modal-form">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input 
                      type="text" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      required 
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Email Address</label>
                      <input 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                        placeholder="john@example.com"
                      />
                    </div>
                    <div className="form-group">
                      <label>Phone Number</label>
                      <input 
                        type="tel" 
                        name="phone" 
                        value={formData.phone} 
                        onChange={handleChange} 
                        required 
                        placeholder="+91 12345 67890"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Message / Requirements</label>
                    <textarea 
                      name="message" 
                      value={formData.message} 
                      onChange={handleChange} 
                      rows="4"
                      placeholder="Tell us about your requirements..."
                    ></textarea>
                  </div>

                  <button type="submit" className="modal-submit-btn" disabled={isLoading}>
                    {isLoading ? 'Sending...' : (
                      <>
                        Request Free Quote <FaPaperPlane />
                      </>
                    )}
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default QuoteModal;
