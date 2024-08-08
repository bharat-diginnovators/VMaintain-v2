import React from 'react';

const Input = ({ id,name, type, value, onChange, className, placeholder }) => (
  <input
    id={id}
    name={name}
    type={type}
    value={value}
    onChange={onChange}
    className={`w-full px-3 py-2 mt-1 border-[1px] bg-[#F4F4F4] border-[#E5E9E5] rounded-md focus:outline-none focus:border-[#882EFD] focus:ring-[.5px] focus:ring-[#882EFD] ${className}`}
    placeholder={placeholder}
    required
  />
);

export default Input;