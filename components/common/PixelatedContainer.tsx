
import React from 'react';

interface ModernCardProps {
  children: React.ReactNode;
  className?: string;
}

const ModernCard: React.FC<ModernCardProps> = ({ children, className = '' }) => {
  return (
    <div
      className={`bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 sm:p-10 text-gray-800 w-full max-w-2xl mx-auto transition-all duration-500 ${className}`}
    >
      {children}
    </div>
  );
};

export default ModernCard;
