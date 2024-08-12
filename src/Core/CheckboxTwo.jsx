import React from 'react';

const Checkbox = ({ id, name, checked, onChange, className, label }) => (
  <div className="flex items-center">
    <input
      id={id}
      name={name}
      type="checkbox"
      checked={checked}
      onChange={onChange} // Ensure this is passed correctly
      className={`w-4 h-4 border-[1px] border-[#F7F7F8] bg-[#F4F4F4] ${checked ? 'bg-[#882EFD]' : ''} checked:bg-[#882EFD] checked:hover:bg-[#882EFD] focus:ring-transparent hover:bg-[#882EFD] ${className}`}
    />
    <label htmlFor={id} className="ml-2 text-sm">
      {label}
    </label>
  </div>
);

export default Checkbox;