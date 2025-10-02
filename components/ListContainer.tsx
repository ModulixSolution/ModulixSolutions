import React from 'react';

interface ListContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function ListContainer({ children, className = '' }: ListContainerProps) {
  return (
    <div className={`space-y-16 ${className}`}>
      {children}
    </div>
  );
}