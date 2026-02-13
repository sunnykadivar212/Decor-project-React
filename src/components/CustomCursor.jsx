import { useState, useEffect } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseenter', onMouseEnter);
      document.addEventListener('mouseleave', onMouseLeave);
      document.addEventListener('mouseover', onMouseOver);
      document.addEventListener('mouseout', onMouseOut);
    };

    const removeEventListeners = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
    };

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseEnter = () => {
      setIsVisible(true);
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    const onMouseOver = (e) => {
      // Check if the target is clickable or has a parent that is clickable
      const target = e.target;
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.classList.contains('clickable') ||
        target.classList.contains('nav-link') ||
        target.classList.contains('fullscreen-nav-link') ||
        getComputedStyle(target).cursor === 'pointer';

      if (isClickable) {
        setIsHovering(true);
      }
    };

    const onMouseOut = (e) => {
      setIsHovering(false);
    };

    // Only enable on non-touch devices
    if (window.matchMedia('(pointer: fine)').matches) {
      addEventListeners();
    }

    return () => removeEventListeners();
  }, [isVisible]);

  const cursorClasses = `custom-cursor ${isHovering ? 'hovering' : ''} ${!isVisible ? 'hidden' : ''}`;

  return (
    <>
      <div 
        className={cursorClasses}
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px` 
        }}
      >
        <div className="cursor-dot"></div>
        <div className="cursor-ring"></div>
      </div>
    </>
  );
};

export default CustomCursor;
