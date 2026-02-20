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
  },
  {
    id: 2,
    name: 'Priya Sharma',
    role: 'Interior Designer',
    image: 'https://i.pravatar.cc/150?img=45',
    rating: 5,
    text: 'Working with Aangan has been a pleasure. Their premium laminates and decorative items are perfect for creating stunning interiors.',
  },
  {
    id: 3,
    name: 'Amit Patel',
    role: 'Business Owner',
    image: 'https://i.pravatar.cc/150?img=33',
    rating: 5,
    text: 'Exceptional service and premium quality products. They completed our office renovation on time and within budget. Very professional!',
  },
  {
    id: 4,
    name: 'Sneha Desai',
    role: 'Architect',
    image: 'https://i.pravatar.cc/150?img=47',
    rating: 5,
    text: 'The craftsmanship and material quality from Aangan is outstanding. They are my go-to choice for all interior projects.',
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

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        handleNext();
      }, 5000);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isPaused, currentIndex]);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <section className="testimonials-section section">
      <div className="container">
        <div className="section-header">
          <h2 className="gradient-text-animated">What Our Clients Say</h2>
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
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="testimonial-card"
            >
              <div className="quote-icon">
                <FaQuoteLeft />
              </div>

              <div className="testimonial-rating">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <FaStar key={i} className="star-icon" />
                ))}
              </div>

              <p className="testimonial-text">{testimonials[currentIndex].text}</p>

              <div className="testimonial-author">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="author-image"
                />
                <div className="author-info">
                  <h4>{testimonials[currentIndex].name}</h4>
                  <p>{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <motion.button
            className="carousel-nav carousel-nav-prev"
            onClick={handlePrevious}
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaChevronLeft />
          </motion.button>

          <motion.button
            className="carousel-nav carousel-nav-next"
            onClick={handleNext}
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaChevronRight />
          </motion.button>

          {/* Dots Navigation */}
          <div className="carousel-dots">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => handleDotClick(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsCarousel;
