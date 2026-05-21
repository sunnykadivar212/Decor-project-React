import { useState, useEffect, useCallback } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Only enable on non-touch devices
  const isPointerFine = typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches;

  const onMouseMove = useCallback((e) => {
    setPosition({ x: e.clientX, y: e.clientY });
    if (!isVisible) setIsVisible(true);
  }, [isVisible]);

  const onMouseEnter = useCallback(() => setIsVisible(true), []);
  const onMouseLeave = useCallback(() => setIsVisible(false), []);

  const onMouseOver = useCallback((e) => {
    // Efficient check: walk up the DOM tree a few levels only, no getComputedStyle
    let el = e.target;
    let depth = 0;
    while (el && depth < 4) {
      const tag = el.tagName;
      if (tag === 'A' || tag === 'BUTTON' || tag === 'INPUT' || tag === 'SELECT' || tag === 'LABEL') {
        setIsHovering(true);
        return;
      }
      const role = el.getAttribute?.('role');
      if (role === 'button' || role === 'link') {
        setIsHovering(true);
        return;
      }
      el = el.parentElement;
      depth++;
    }
    setIsHovering(false);
  }, []);

  useEffect(() => {
    if (!isPointerFine) return;

    document.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseover', onMouseOver, { passive: true });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseover', onMouseOver);
    };
  }, [onMouseMove, onMouseEnter, onMouseLeave, onMouseOver, isPointerFine]);

  if (!isPointerFine) return null;

  return (
    <div
      className={`custom-cursor ${isHovering ? 'hovering' : ''} ${!isVisible ? 'hidden' : ''}`}
      style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
    >
      <div className="cursor-dot" />
      <div className="cursor-ring" />
    </div>
  );
};

export default CustomCursor;
