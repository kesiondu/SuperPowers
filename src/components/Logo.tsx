import React from 'react';

interface LogoProps {
  size?: number;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ size = 24, className = "" }) => {
  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      {/* Brutalist Shadow/Offset */}
      <div 
        className="absolute bg-foreground-dark rounded-lg translate-x-1 translate-y-1"
        style={{ width: size + 8, height: size + 8 }}
      />
      {/* Main Logo Box */}
      <div 
        className="relative bg-accent-lime border-2 border-foreground-dark rounded-lg flex items-center justify-center"
        style={{ width: size + 8, height: size + 8 }}
      >
        <svg 
          width={size} 
          height={size} 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="text-foreground-dark"
        >
          {/* Stylized 'S' Bolt Logo */}
          <path 
            d="M16 3H7L4 13H11L8 21H17L20 11H13L16 3Z" 
            fill="currentColor" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinejoin="round"
          />
          <path 
            d="M12 8L10 13H14L12 18" 
            stroke="white" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="opacity-80"
          />
        </svg>
      </div>
    </div>
  );
};
