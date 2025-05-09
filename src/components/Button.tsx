import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  isPrimary?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  onClick,
  isPrimary = true,
  className = '',
}) => {
  const baseClasses = `inline-block px-6 py-3 rounded-lg font-semibold text-center transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
    isPrimary
      ? 'bg-accent text-white hover:bg-opacity-90 focus:ring-accent'
      : 'bg-white text-accent border-2 border-accent hover:bg-accent/5 focus:ring-accent'
  } ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={baseClasses}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={baseClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;