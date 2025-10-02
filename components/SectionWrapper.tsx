import React from 'react';
import { Parallax } from 'react-parallax';
import { motion } from 'framer-motion';

interface SectionWrapperProps {
  children?: React.ReactNode;
  className?: string;
  id?: string;
  bgImage?: string;
  strength?: number;
}

export default function SectionWrapper({
  children,
  className = '',
  id,
  bgImage,
  strength = 500
}: SectionWrapperProps) {
  const content = (
    <motion.section
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`relative ${className}`}
    >
      {children}
    </motion.section>
  );

  if (bgImage) {
    return (
      <Parallax bgImage={bgImage} strength={strength}>
        {content}
      </Parallax>
    );
  }

  return content;
}
