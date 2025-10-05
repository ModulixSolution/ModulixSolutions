import React from 'react';
import { Parallax } from 'react-parallax';
import { motion } from 'framer-motion';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  parallaxStrength?: number;
}

export default function SectionWrapper({
  children,
  className = '',
  id,
  parallaxStrength = 500
}: SectionWrapperProps) {
  return (
    <Parallax strength={parallaxStrength}>
      <motion.section
        id={id}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`relative ${className}`}
      >
        {children}
      </motion.section>
    </Parallax>
  );
}