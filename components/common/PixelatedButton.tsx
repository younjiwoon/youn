
import React from 'react';

interface ModernButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary';
}

const ModernButton: React.FC<ModernButtonProps> = ({ children, className = '', variant = 'primary', ...props }) => {
  const baseClasses = 'w-full text-lg font-bold px-6 py-4 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:scale-100';
  
  const variantClasses = {
    primary: 'bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-300',
    secondary: 'bg-pink-500 text-white hover:bg-pink-600 focus:ring-pink-300',
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default ModernButton;
