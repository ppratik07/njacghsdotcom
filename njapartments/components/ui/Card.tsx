import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'announcement' | 'event';
  accentBorder?: boolean;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  variant = 'default',
  accentBorder = false 
}) => {
  const baseStyles = 'bg-white rounded-lg transition-all duration-200';
  
  const variantStyles = {
    default: 'shadow-sm hover:shadow-md',
    announcement: 'shadow-md hover:shadow-lg',
    event: 'overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1',
  };
  
  const borderStyles = accentBorder ? 'border-l-4 border-l-primary' : '';
  
  return (
    <div className={`${baseStyles} ${variantStyles[variant]} ${borderStyles} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
