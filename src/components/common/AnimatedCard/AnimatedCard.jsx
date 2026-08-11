import { motion } from 'framer-motion';
import './AnimatedCard.css';

function AnimatedCard({ 
  children, 
  className = '',
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

  return (
    <motion.div
      className={cardClasses}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5 }}
      whileHover={hoverLift ? { y: -8 } : {}}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export default AnimatedCard;
