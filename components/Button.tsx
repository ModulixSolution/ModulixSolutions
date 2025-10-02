import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({
  children,
  onClick,
  className = '',
  variant = 'primary',
  type = 'button'
}: ButtonProps) {
  const [particles, setParticles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    angle: number;
  }>>([]);

  const createParticles = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const newParticles = Array.from({ length: 12 }, (_, i) => ({
      id: Date.now() + i,
      x: centerX,
      y: centerY,
      angle: (i * 30) * (Math.PI / 180),
    }));

    setParticles(newParticles);

    // Remove particles after animation
    setTimeout(() => setParticles([]), 1000);

    if (onClick) onClick(event);
  };

  const baseClasses = 'px-6 py-3 rounded-lg transition-all font-semibold relative overflow-hidden';
  const variants = {
    primary: 'bg-cyber-blue hover:bg-blue-600 text-white',
    secondary: 'bg-neon-pink hover:bg-pink-600 text-white',
    outline: 'border-2 border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-white',
  };

  return (
    <>
      <motion.button
        type={type}
        className={`${baseClasses} ${variants[variant]} ${className}`}
        onClick={createParticles}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
      </motion.button>

      {/* Particle explosion */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="particle fixed w-2 h-2 pointer-events-none z-50"
          initial={{
            x: particle.x - 4,
            y: particle.y - 4,
            opacity: 1,
          }}
          animate={{
            x: particle.x + Math.cos(particle.angle) * 100,
            y: particle.y + Math.sin(particle.angle) * 100,
            opacity: 0,
          }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
      ))}
    </>
  );
}
