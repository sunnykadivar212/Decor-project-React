import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaStar, FaQuoteLeft } from 'react-icons/fa';
import './TestimonialsCarousel.css';

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    role: 'Homeowner',
    image: 'https://i.pravatar.cc/150?img=12',
    rating: 5,
    text: 'Aangan transformed our home beautifully! The quality of materials and attention to detail exceeded our expectations. Highly recommended!',
    location: 'Ahmedabad',
  },
  {
    id: 2,
    name: 'Priya Sharma',
    role: 'Interior Designer',
    image: 'https://i.pravatar.cc/150?img=45',
    rating: 5,
    text: 'Working with Aangan has been a pleasure. Their premium laminates and decorative items are perfect for creating stunning interiors.',
    location: 'Surat',
  },
  {
    id: 3,
    name: 'Amit Patel',
    role: 'Business Owner',
    image: 'https://i.pravatar.cc/150?img=33',
    rating: 5,
    text: 'Exceptional service and premium quality products. They completed our office renovation on time and within budget. Very professional!',
    location: 'Rajkot',
  },
  {
    id: 4,
    name: 'Sneha Desai',
    role: 'Architect',
    image: 'https://i.pravatar.cc/150?img=47',
    rating: 5,
    text: 'The craftsmanship and material quality from Aangan is outstanding. They are my go-to choice for all interior projects.',
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
          <p>Trusted by thousands of satisfied customers across India</p>
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
                  <FaQuoteLeft className="quote-icon" />
                  <div className="testimonial-rating">
                    {[...Array(t.rating)].map((_, i) => (
                      <FaStar key={i} className="star-icon" />
                    ))}
                  </div>
                </div>

                <p className="testimonial-text">{t.text}</p>

                <div className="testimonial-author">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="author-image"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="author-info">
                    <h4>{t.name}</h4>
                    <p>{t.role}</p>
                    <span className="author-location">📍 {t.location}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button className="carousel-nav carousel-nav-prev" onClick={handlePrevious} aria-label="Previous testimonial">
            <FaChevronLeft />
          </button>
          <button className="carousel-nav carousel-nav-next" onClick={handleNext} aria-label="Next testimonial">
            <FaChevronRight />
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
        </div>
      </div>
    </section>
  );
}

export default TestimonialsCarousel;
