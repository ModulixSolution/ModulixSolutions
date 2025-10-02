import React from 'react';

interface RowContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function RowContainer({ children, className = '' }: RowContainerProps) {
  return (
    <div className={`flex flex-col md:flex-row gap-8 ${className}`}>
      {children}
    </div>
  );
}