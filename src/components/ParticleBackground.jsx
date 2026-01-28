import { useEffect } from 'react';
import './ParticleBackground.css';

function ParticleBackground({ style = 'golden-luxury', customConfig = null }) {
  useEffect(() => {
    // Initialize particles.js
    if (window.particlesJS) {
      
      // Preset configurations
      const presets = {
        'golden-luxury': {
          particles: {
            number: { value: 60 },
            color: { value: "#c9a961" },
            shape: { 
              type: ["circle", "triangle"],
            },
            opacity: { 
              value: 0.5,
              random: true,
              anim: { enable: true, speed: 1, opacity_min: 0.2, sync: false }
            },
            size: { 
              value: 4,
              random: true,
              anim: { enable: true, speed: 2, size_min: 1, sync: false }
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#c9a961",
              opacity: 0.3,
              width: 1.5,
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: true,
              straight: false,
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: { enable: true, mode: "repulse" },
              onclick: { enable: true, mode: "push" },
            },
            modes: {
              repulse: { distance: 120, duration: 0.4 },
              push: { particles_nb: 4 }
            }
          }
        },
        
        'floating-bubbles': {
          particles: {
            number: { value: 40 },
            color: { value: "#c9a961" },
            shape: { type: "circle" },
            opacity: { 
              value: 0.4,
              random: true,
              anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false }
            },
            size: { 
              value: 20,
              random: true,
              anim: { enable: true, speed: 3, size_min: 5, sync: false }
            },
            move: {
              enable: true,
              speed: 1.5,
              direction: "top",
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false,
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: { enable: true, mode: "bubble" },
            },
            modes: {
              bubble: { distance: 200, size: 30, duration: 2, opacity: 0.6 }
            }
          }
        },

        'starfield': {
          particles: {
            number: { value: 150 },
            color: { value: ["#c9a961", "#e5c88a", "#ffffff"] },
            shape: { type: "circle" },
            opacity: { 
              value: 0.8,
              random: true,
              anim: { enable: true, speed: 2, opacity_min: 0.2, sync: false }
            },
            size: { 
              value: 2,
              random: true,
            },
            move: {
              enable: true,
              speed: 0.5,
              direction: "none",
              random: true,
              straight: false,
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: { enable: true, mode: "grab" },
            },
            modes: {
              grab: { distance: 150, line_linked: { opacity: 0.5 } }
            }
          }
        },

        'geometric-network': {
          particles: {
            number: { value: 80 },
            color: { value: "#011822" },
            shape: { 
              type: ["circle", "edge", "triangle"],
              polygon: { nb_sides: 6 }
            },
            opacity: { value: 0.4 },
            size: { value: 3, random: true },
            line_linked: {
              enable: true,
              distance: 180,
              color: "#c9a961",
              opacity: 0.4,
              width: 2,
            },
            move: {
              enable: true,
              speed: 2.5,
              direction: "none",
              random: false,
              straight: false,
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: { enable: true, mode: "grab" },
              onclick: { enable: true, mode: "push" },
            },
            modes: {
              grab: { distance: 200, line_linked: { opacity: 0.8 } },
              push: { particles_nb: 3 }
            }
          }
        },

        'aurora-waves': {
          particles: {
            number: { value: 50 },
            color: { value: ["#c9a961", "#e5c88a", "#d4af6a"] },
            shape: { type: "circle" },
            opacity: { 
              value: 0.3,
              random: true,
              anim: { enable: true, speed: 0.5, opacity_min: 0.1, sync: false }
            },
            size: { 
              value: 15,
              random: true,
              anim: { enable: true, speed: 4, size_min: 3, sync: false }
            },
            line_linked: {
              enable: true,
              distance: 200,
              color: "#c9a961",
              opacity: 0.15,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
              direction: "right",
              random: true,
              straight: false,
              out_mode: "out",
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: { enable: true, mode: "bubble" },
            },
            modes: {
              bubble: { distance: 250, size: 25, duration: 2, opacity: 0.5 }
            }
          }
        }
      };

      // Use custom config if provided, otherwise use preset
      const config = customConfig || presets[style] || presets['golden-luxury'];
      
      window.particlesJS("particles-js", config);
    }

    // Cleanup function
    return () => {
      const particlesContainer = document.getElementById('particles-js');
      if (particlesContainer) {
        particlesContainer.innerHTML = '';
      }
    };
  }, [style, customConfig]);

  return (
    <div id="particles-js" className="particle-background"></div>
  );
}

export default ParticleBackground;
