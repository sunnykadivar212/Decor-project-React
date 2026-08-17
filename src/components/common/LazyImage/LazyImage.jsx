import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
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
  const imgRef = useRef(null);

  const optimizedSrc = optimizeImageUrl(src, { width, quality });

  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      setLoaded(true);
    }
  }, [optimizedSrc]);

  return (
    <div 
      className={`lazy-image-container ${className}`}
      style={{ 
        ...(aspectRatio ? { aspectRatio } : {}),
        ...style 
      }}
    >
      {!loaded && (
        <div className="lazy-image-skeleton skeleton-loader" />
      )}
      <img
        ref={imgRef}
        src={optimizedSrc}
        alt={alt || ''}
        className={`lazy-image ${loaded ? 'loaded' : 'loading'}`}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        style={{ objectFit }}
      />
    </div>
  );
}

LazyImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  className: PropTypes.string,
  aspectRatio: PropTypes.string,
  width: PropTypes.number,
  quality: PropTypes.number,
  style: PropTypes.object,
  objectFit: PropTypes.string
};

export default LazyImage;
