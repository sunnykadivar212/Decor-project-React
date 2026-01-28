import { useEffect } from 'react';
import PropTypes from 'prop-types';
import './ParticlesBackground.css';

function ParticlesBackground({ id = 'particles-js', config }) {
  useEffect(() => {
    // Load particles.js script
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    script.async = true;
    script.onload = () => {
      if (window.particlesJS) {
        const defaultConfig = {
          particles: {
            number: { value: 100 },
            color: { value: "#011822" },
            shape: { type: "circle" },
            opacity: { value: 0.3 },
            size: { value: 3 },
            line_linked: {
              enable: true,
              distance: 200,
              color: "#011822",
              opacity: 0.2,
              width: 1,
            },
            move: {
              enable: true,
              speed: 2,
            },
          },
          interactivity: {
            detect_on: "window",
            events: {
              onhover: { enable: true, mode: "repulse" },
              onclick: { enable: true, mode: "push" },
            },
            modes: {
              repulse: { distance: 100, duration: 0.4 },
              push: { particles_nb: 4 },
            },
          },
        };

        window.particlesJS(id, config || defaultConfig);
      }
    };
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [id, config]);

  return <div id={id} className="particles-background"></div>;
}

ParticlesBackground.propTypes = {
  id: PropTypes.string,
  config: PropTypes.object,
};

export default ParticlesBackground;
