import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaSearch } from 'react-icons/fa';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import './FAQ.css';

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const faqData = [
    {
      category: 'Products',
      questions: [
        {
          q: 'What types of plywood do you offer?',
          a: 'We offer premium quality plywood including commercial plywood, marine plywood, and decorative plywood in various thicknesses and finishes.'
        },
        {
          q: 'Are your laminates scratch-resistant?',
          a: 'Yes, our laminates feature advanced scratch-resistant technology and are designed to withstand daily wear and tear while maintaining their appearance.'
        },
        {
          q: 'Do you provide custom designs for decorative items?',
          a: 'Absolutely! We offer custom design services for mandala art, decorative panels, and other decorative items to match your specific requirements.'
        }
      ]
    },
    {
      category: 'Orders & Delivery',
      questions: [
        {
          q: 'What is the typical delivery time?',
          a: 'Delivery typically takes 5-7 business days within Gujarat and 7-14 days for other locations, depending on product availability and your location.'
        },
        {
          q: 'Do you offer installation services?',
          a: 'Yes, we provide professional installation services for all our products. Our expert team ensures perfect installation and finishing.'
        },
        {
          q: 'Can I track my order?',
          a: 'Yes, once your order is dispatched, you will receive tracking information via email and SMS to monitor your delivery status.'
        }
      ]
    },
    {
      category: 'Pricing & Payment',
      questions: [
        {
          q: 'How can I get a quote?',
          a: 'You can request a quote through our contact form, WhatsApp, or by calling us directly. We provide detailed quotations within 24 hours.'
        },
        {
          q: 'What payment methods do you accept?',
          a: 'We accept cash, bank transfers, UPI, credit/debit cards, and cheques. For bulk orders, we also offer flexible payment terms.'
        },
        {
          q: 'Do you offer bulk discounts?',
          a: 'Yes, we provide attractive discounts for bulk orders and long-term projects. Contact us for a customized quote.'
        }
      ]
    },
    {
      category: 'Quality & Warranty',
      questions: [
        {
          q: 'Do your products come with a warranty?',
          a: 'Yes, all our products come with a manufacturer warranty. The warranty period varies by product type - typically 1-5 years.'
        },
        {
          q: 'Are your products eco-friendly?',
          a: 'We prioritize sustainability and offer eco-friendly options including FSC-certified plywood and low-VOC laminates.'
        },
        {
          q: 'How do I maintain my laminate surfaces?',
          a: 'Clean with a soft, damp cloth and mild detergent. Avoid abrasive cleaners and excessive water. Wipe spills immediately for best results.'
        }
      ]
    }
  ];

  const allQuestions = faqData.flatMap((cat, catIndex) =>
    cat.questions.map((q, qIndex) => ({
      ...q,
      category: cat.category,
      index: `${catIndex}-${qIndex}`
    }))
  );

  const filteredQuestions = searchTerm
    ? allQuestions.filter(
        (item) =>
          item.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.a.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : null;

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-page page-transition">
      <SEO
        title="FAQ - Frequently Asked Questions"
        description="Find answers to common questions about our products, services, delivery, and more at Aangan Decor."
        keywords="faq, questions, help, support, aangan decor"
        url="https://aangangroup.in/faq"
      />

      <PageHero
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our products and services"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'FAQ', path: '/faq' }
        ]}
      />

      <section className="faq-content section-padding">
        <div className="container">
          {/* Search Bar */}
          <div className="faq-search">
            <FaSearch />
            <input
              type="text"
              placeholder="Search for answers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* FAQ List */}
          {filteredQuestions ? (
            <div className="faq-search-results">
              <h3>{filteredQuestions.length} results found</h3>
              {filteredQuestions.map((item) => (
                <motion.div
                  key={item.index}
                  className="faq-item"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <button
                    className={`faq-question ${activeIndex === item.index ? 'active' : ''}`}
                    onClick={() => toggleQuestion(item.index)}
                  >
                    <span className="category-tag">{item.category}</span>
                    <span>{item.q}</span>
                    <FaChevronDown className="chevron" />
                  </button>
                  <AnimatePresence>
                    {activeIndex === item.index && (
                      <motion.div
                        className="faq-answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p>{item.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="faq-categories">
              {faqData.map((category, catIndex) => (
                <div key={catIndex} className="faq-category">
                  <h3 className="category-title">{category.category}</h3>
                  {category.questions.map((item, qIndex) => {
                    const index = `${catIndex}-${qIndex}`;
                    return (
                      <motion.div
                        key={index}
                        className="faq-item"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: qIndex * 0.1 }}
                      >
                        <button
                          className={`faq-question ${activeIndex === index ? 'active' : ''}`}
                          onClick={() => toggleQuestion(index)}
                        >
                          <span>{item.q}</span>
                          <FaChevronDown className="chevron" />
                        </button>
                        <AnimatePresence>
                          {activeIndex === index && (
                            <motion.div
                              className="faq-answer"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <p>{item.a}</p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </div>
              ))}
            </div>
          )}

          {/* Contact CTA */}
          <div className="faq-cta">
            <h3>Still have questions?</h3>
            <p>Can't find the answer you're looking for? Our team is here to help.</p>
            <a href="/contact" className="btn btn-primary">Contact Us</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FAQ;
