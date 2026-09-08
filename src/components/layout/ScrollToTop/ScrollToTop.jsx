import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname, search, hash } = useLocation();

  useEffect(() => {
    // If there is an anchor hash, scroll to that element
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        if (window.lenis) {
          window.lenis.scrollTo(element, { offset: -80, immediate: true });
        } else {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        return;
      }
    }

    // Scroll immediately to top on both window and Lenis
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true });
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname, search, hash]);

  return null;
}

export default ScrollToTop;
