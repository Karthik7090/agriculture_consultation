import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CTAButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({ text, onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold rounded-lg transition-colors shadow-lg ${className}`}
    >
      {text}
      <ArrowRight className="ml-2 h-5 w-5" />
    </button>
  );
};

export default CTAButton;