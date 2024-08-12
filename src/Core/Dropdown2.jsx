import React, { useState, useEffect, useRef } from "react";
import down from "../assets/Icons/down.svg"

const Dropdown = ({
  options = [],
  selected = "",
  onSelect = () => {},
  width = "w-full", 
  placeholder = "Select an option",
  menuWidth = "", 
  bgColor = "bg-[#F7F7F8]",
  borderColor = "border-gray-200",
  focusColor = "focus:ring-[#882EFD] focus:border-[#882EFD]",
  textColor = "text-left",
  customClass = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSelection, setCurrentSelection] = useState(selected);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setCurrentSelection(option);
    onSelect(option);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={`relative  ${width} ${customClass}`} ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className={`flex justify-between w-full  items-center px-3 py-1.5 ${bgColor} border ${borderColor} ${focusColor} sm:text-sm rounded-md ${textColor}`}
      >
        {currentSelection || placeholder || <spa></spa>}
        <img src={down} alt="Dropdown Arrow"  className="self-end"/>
      </button>
      {isOpen && (
        <ul
          className={`absolute z-10 mt-1 ${menuWidth} ${bgColor} border ${borderColor} rounded-md shadow-lg`}
        >
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleOptionClick(option)}
              className="cursor-pointer px-4 py-2 hover:bg-[#882EFD] hover:text-white md:text-sm lg:text-[1rem]"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
