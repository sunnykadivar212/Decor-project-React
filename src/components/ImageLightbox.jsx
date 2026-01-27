import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight, FaSearchPlus, FaSearchMinus } from 'react-icons/fa';
import './ImageLightbox.css';

function ImageLightbox({ images, currentIndex, onClose }) {
  const [index, setIndex] = useState(currentIndex);
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrevious();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [index]);

  const handlePrevious = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    setZoom(1);
  };

  const handleNext = () => {
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    setZoom(1);
  };

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 0.5, 3));
  };

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 0.5, 1));
  };

  if (!images || images.length === 0) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="lightbox-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <button className="lightbox-close" onClick={onClose} aria-label="Close">
          <FaTimes />
        </button>

        <div className="lightbox-controls">
          <button onClick={handleZoomOut} disabled={zoom <= 1} aria-label="Zoom out">
            <FaSearchMinus />
          </button>
          <span>{Math.round(zoom * 100)}%</span>
          <button onClick={handleZoomIn} disabled={zoom >= 3} aria-label="Zoom in">
            <FaSearchPlus />
          </button>
        </div>

        <motion.div
          className="lightbox-content"
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.9 }}
        >
          {images.length > 1 && (
            <>
              <button
                className="lightbox-nav lightbox-prev"
                onClick={handlePrevious}
                aria-label="Previous image"
              >
                <FaChevronLeft />
              </button>
              <button
                className="lightbox-nav lightbox-next"
                onClick={handleNext}
                aria-label="Next image"
              >
                <FaChevronRight />
              </button>
            </>
          )}

          <div className="lightbox-image-container">
            <img
              src={images[index]}
              alt={`Image ${index + 1}`}
              style={{ transform: `scale(${zoom})` }}
              className="lightbox-image"
            />
          </div>

          {images.length > 1 && (
            <div className="lightbox-counter">
              {index + 1} / {images.length}
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default ImageLightbox;
