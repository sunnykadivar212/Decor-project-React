import { useState } from 'react';
import { FaWhatsapp, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import './ChatWidget.css';

function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappNumber = '919876543210'; // Replace with actual number
  const defaultMessage = 'Hello! I would like to know more about your products.';

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(url, '_blank');
    setIsOpen(false);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="chat-popup glass"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
          >
            <div className="chat-header">
              <div className="chat-header-info">
                <h4>Chat with us</h4>
                <span className="chat-status">
                  <span className="status-dot"></span>
                  Online
                </span>
              </div>
              <button
                className="chat-close"
                onClick={() => setIsOpen(false)}
                aria-label="Close chat"
              >
                <FaTimes />
              </button>
            </div>
            <div className="chat-body">
              <div className="chat-message">
                <p>👋 Hi there! How can we help you today?</p>
              </div>
              <button className="chat-whatsapp-btn" onClick={handleWhatsAppClick}>
                <FaWhatsapp />
                <span>Start WhatsApp Chat</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className="chat-widget-btn"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Open chat"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <FaTimes />
            </motion.div>
          ) : (
            <motion.div
              key="whatsapp"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <FaWhatsapp />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  );
}

export default ChatWidget;
