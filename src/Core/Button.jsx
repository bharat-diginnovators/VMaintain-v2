import React from 'react';

const Button = ({ text, type, className, onClick,disabled }) => (
  <button
    type={type}
    className={`rounded-md text-md font-semibold px-12 py-2 w-full ${className}`}
    onClick={onClick}
    disabled={disabled}
  >
    {text}
  </button>
);

export default Button;