import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import './AnimatedCard.css';

function AnimatedCard({ 
  children, 
  className = '',
  tiltEnabled = true,
  glassEffect = false,
  gradientBorder = false,
  hoverLift = true,
  ...props 
}) {
  const cardClasses = `
    animated-card
    ${glassEffect ? 'glass-card' : ''}
    ${gradientBorder ? 'gradient-border' : ''}
    ${hoverLift ? 'hover-lift' : ''}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  if (tiltEnabled) {
    return (
      <Tilt
        tiltMaxAngleX={5}
        tiltMaxAngleY={5}
        perspective={1000}
        scale={1.02}
        transitionSpeed={400}
        gyroscope={true}
      >
        <motion.div
          className={cardClasses}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          {...props}
        >
          {children}
        </motion.div>
      </Tilt>
    );
  }

  return (
    <motion.div
      className={cardClasses}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={hoverLift ? { y: -8 } : {}}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export default AnimatedCard;
