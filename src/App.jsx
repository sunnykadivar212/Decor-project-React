import { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Lenis from 'lenis';
import MainLayout from './layouts/MainLayout';
import AppRoutes from './routes/AppRoutes';
import './App.css';

import CustomCursor from './components/layout/CustomCursor/CustomCursor';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <MainLayout>
          <AppRoutes />
        </MainLayout>
        <CustomCursor />
      </Router>
    </HelmetProvider>
  );
}

export default App;
