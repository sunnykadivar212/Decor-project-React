import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaStar, FaQuoteLeft } from 'react-icons/fa';
import './TestimonialsCarousel.css';

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    role: 'Luxury Homeowner',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    text: 'Aangan transformed our residential sanctuary with absolute perfection! Their architectural materials and attention to detail exceeded all our expectations.',
    location: 'Ahmedabad',
  },
  {
    id: 2,
    name: 'Priya Sharma',
    role: 'Principal Interior Architect',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    text: 'Collaborating with Aangan on high-end luxury villas is always seamless. Their premium laminates, veneers, and custom decor pieces elevate every space.',
    location: 'Surat',
  },
  {
    id: 3,
    name: 'Amit Patel',
    role: 'Corporate Estate Director',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    text: 'Flawless execution and world-class material sourcing. They delivered our corporate headquarters ahead of schedule with flawless finish.',
    location: 'Rajkot',
  },
  {
    id: 4,
    name: 'Sneha Desai',
    role: 'Lead Architect',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    text: 'The artisanal craftsmanship and material integrity from Aangan is second to none. My top choice for all bespoke architectural projects.',
    location: 'Vadodara',
  },
];

function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(0);
  const timerRef = useRef(null);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleDotClick = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Fixed: only isPaused in deps, not currentIndex — prevents timer recreation on every slide
  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timerRef.current);
  }, [isPaused]);

  const slideVariants = {
    enter: (dir) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir < 0 ? 80 : -80, opacity: 0 }),
  };

  const t = testimonials[currentIndex];

  return (
    <section className="testimonials-section section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Client Stories</span>
          <h2>What Our Clients Say</h2>
          <p>Trusted by homeowners, top architects, and corporate leaders across India</p>

          <div className="testimonials-trust-bar">
            <span className="trust-item">⭐ <strong>4.9/5</strong> Rating</span>
            <span className="trust-divider">•</span>
            <span className="trust-item">🏆 <strong>5000+</strong> Spaces Transformed</span>
            <span className="trust-divider">•</span>
            <span className="trust-item">✔️ <strong>100%</strong> Verified Reviews</span>
          </div>
        </div>

        <div
          className="testimonials-carousel"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="testimonial-card"
            >
              <div className="testimonial-card-inner">
                <div className="testimonial-top">
                  <div className="quote-badge">
                    <FaQuoteLeft className="quote-icon" />
                  </div>
                  <div className="testimonial-rating">
                    {[...Array(t.rating)].map((_, i) => (
                      <FaStar key={i} className="star-icon" />
                    ))}
                  </div>
                </div>

                <p className="testimonial-text">"{t.text}"</p>

                <div className="testimonial-author">
                  <div className="author-avatar-wrap">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="author-image"
                      loading="lazy"
                    />
                  </div>
                  <div className="author-info">
                    <div className="author-name-row">
                      <h4>{t.name}</h4>
                      <span className="verified-badge" title="Verified Client">Verified</span>
                    </div>
                    <p className="author-role">{t.role}</p>
                    <span className="author-location">📍 {t.location}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="carousel-controls">
            <button className="carousel-nav carousel-nav-prev" onClick={handlePrevious} aria-label="Previous testimonial">
              <FaChevronLeft />
            </button>

            <div className="carousel-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => handleDotClick(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button className="carousel-nav carousel-nav-next" onClick={handleNext} aria-label="Next testimonial">
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsCarousel;
