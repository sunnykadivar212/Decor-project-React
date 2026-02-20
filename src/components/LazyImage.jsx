import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './LazyImage.css';

function LazyImage({ 
  src, 
  alt, 
  className = '', 
  placeholderSrc = null,
  aspectRatio = '16/9'
}) {
  const [imageSrc, setImageSrc] = useState(placeholderSrc || null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    // Intersection Observer for lazy loading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '50px',
      }
    );

    const imageElement = document.getElementById(`lazy-${src}`);
    if (imageElement) {
      observer.observe(imageElement);
    }

    return () => {
      if (imageElement) {
        observer.unobserve(imageElement);
      }
    };
  }, [src]);

  useEffect(() => {
    if (isInView && src) {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setImageSrc(src);
        setImageLoaded(true);
      };
    }
  }, [isInView, src]);

  return (
    <div 
      id={`lazy-${src}`}
      className={`lazy-image-container ${className}`}
      style={{ aspectRatio }}
    >
      {!imageLoaded && (
        <div className="lazy-image-skeleton skeleton-loader" />
      )}
      {imageSrc && (
        <img
          src={imageSrc}
          alt={alt}
          className={`lazy-image ${imageLoaded ? 'loaded' : 'loading'}`}
          loading="lazy"
        />
      )}
    </div>
  );
}

LazyImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  placeholderSrc: PropTypes.string,
  aspectRatio: PropTypes.string,
};

export default LazyImage;
