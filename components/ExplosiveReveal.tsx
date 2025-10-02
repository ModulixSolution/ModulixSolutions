import React from 'react';
import { motion } from 'framer-motion';

interface ExplosiveRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'center';
}

export default function ExplosiveReveal({
  children,
  className = '',
  delay = 0,
  direction = 'center'
}: ExplosiveRevealProps) {
  // Calculate initial position based on direction
  const getInitialPosition = () => {
    const distance = 100;
    switch (direction) {
      case 'up':
        return { y: distance, x: 0 };
      case 'down':
        return { y: -distance, x: 0 };
      case 'left':
        return { x: distance, y: 0 };
      case 'right':
        return { x: -distance, y: 0 };
      case 'center':
      default:
        return { x: 0, y: 0, scale: 0.3 };
    }
  };

  // Create shrapnel variants for the explosive effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: delay,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      ...getInitialPosition(),
      opacity: 0,
      rotate: Math.random() * 360 - 180,
    },
    visible: {
      x: 0,
      y: 0,
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
        duration: 0.8,
      },
    },
  };

  // Shrapnel effect - small particles that burst out
  const shrapnelVariants = {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    visible: (index: number) => ({
      scale: [0, 1.2, 0],
      opacity: [0, 1, 0],
      x: Math.cos((index / 8) * Math.PI * 2) * 150,
      y: Math.sin((index / 8) * Math.PI * 2) * 150,
      transition: {
        duration: 1.2,
        delay: delay + 0.1,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <motion.div
      className={`relative ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
    >
      {/* Shrapnel particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 12 }, (_, i) => (
          <motion.div
            key={`shrapnel-${i}`}
            className="absolute w-1 h-1 bg-cyber-blue rounded-full"
            custom={i}
            variants={shrapnelVariants}
            style={{
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />
        ))}
        {Array.from({ length: 8 }, (_, i) => (
          <motion.div
            key={`shrapnel-pink-${i}`}
            className="absolute w-1 h-1 bg-neon-pink rounded-full"
            custom={i + 12}
            variants={shrapnelVariants}
            style={{
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <motion.div
        variants={itemVariants}
        className="relative z-10"
      >
        {children}
      </motion.div>

      {/* Shockwave effect */}
      <motion.div
        className="absolute inset-0 border-2 border-cyber-blue rounded-lg"
        initial={{ scale: 0, opacity: 1 }}
        animate={{
          scale: [0, 1.5, 2],
          opacity: [1, 0.5, 0],
        }}
        transition={{
          duration: 1,
          delay: delay + 0.3,
          ease: 'easeOut',
        }}
      />
    </motion.div>
  );
}
