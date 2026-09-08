import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FaImage, FaSpinner } from 'react-icons/fa';
import { optimizeImageUrl } from '../../../utils/imageOptimizer';
import './LazyImage.css';

function LazyImage({ 
  src, 
  alt, 
  className = '', 
  aspectRatio,
  width = 800,
  quality = 75,
  style = {},
  objectFit = 'cover'
}) {
  const [loaded, setLoaded] = useState(false);
  const [hasError, setHasError] = useState(!src);
  const imgRef = useRef(null);

  const optimizedSrc = src ? optimizeImageUrl(src, { width, quality }) : '';

  useEffect(() => {
    setHasError(!src);
    setLoaded(false);
  }, [src]);

  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      if (imgRef.current.naturalWidth === 0) {
        setHasError(true);
      } else {
        setLoaded(true);
        setHasError(false);
      }
    }
  }, [optimizedSrc]);

  return (
    <div 
      className={`lazy-image-container ${className} ${hasError ? 'has-error' : ''}`}
      style={{ 
        ...(aspectRatio ? { aspectRatio } : {}),
        ...style 
      }}
    >
      {/* Loading Skeleton & Spinner */}
      {!loaded && !hasError && (
        <div className="lazy-image-skeleton skeleton-loader">
          <div className="lazy-image-spinner">
            <FaSpinner className="spinner-icon" />
          </div>
        </div>
      )}

      {/* Error / Fallback UI */}
      {hasError ? (
        <div className="image-not-available" role="img" aria-label={alt || 'Image not available'}>
          <div className="fallback-content">
            <div className="fallback-icon-wrap">
              <FaImage className="fallback-icon" />
            </div>
            <span className="fallback-brand">AANGAN DECOR</span>
            <span className="fallback-text">Image Not Available</span>
          </div>
        </div>
      ) : (
        <img
          ref={imgRef}
          src={optimizedSrc}
          alt={alt || ''}
          className={`lazy-image ${loaded ? 'loaded' : 'loading'}`}
          loading="lazy"
          decoding="async"
          onLoad={() => {
            setLoaded(true);
            setHasError(false);
          }}
          onError={() => {
            setHasError(true);
            setLoaded(true);
          }}
          style={{ objectFit }}
        />
      )}
    </div>
  );
}

LazyImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
  aspectRatio: PropTypes.string,
  width: PropTypes.number,
  quality: PropTypes.number,
  style: PropTypes.object,
  objectFit: PropTypes.string
};

export default LazyImage;
