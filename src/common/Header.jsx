import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import menu from "../assets/Icons/Vector.svg";
import Logo from "../assets/react.svg";
import search from "../assets/Icons/Mask group.svg";
import speaker from "../assets/Icons/Mask group (1).svg";
import help from "../assets/Icons/Mask group (2).svg";
import bell from "../assets/Icons/Mask group (3).svg";
import pluse from "../assets/Icons/Mask group (4).svg";
import profile from "../assets/profile.svg";
import Down from "../assets/Icons/down.svg";

const Header = () => {
  const [selected, setSelected] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const options = ["Workspace 1", "Workspace 2", "Workspace 3", "Workspace 4"];
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="flex justify-between items-center px-5 py-4 bg-white">
      <div className="flex justify-between items-center xs:gap-10 sm:gap-15 xs:w-[20rem] lg:gap-20 lg:w-[30rem]">
        <div className="flex justify-between items-center gap-5">
          <button>
            <img src={menu} alt="menu" className="xs:w-[1rem] md:w-[1.4rem]" />
          </button>
          <Link to="/">
            <img src={Logo} alt="logo" className="xs:w-[2.5rem] md:w-[3.8rem]" />
          </Link>
        </div>
        <div className="xs:hidden md:block lg:w-[25rem]" ref={dropdownRef}>
          <button
            onClick={toggleDropdown}
            className="mt-1 flex justify-between items-center w-full px-3 py-1.5 text-base bg-[#F7F7F8] border border-gray-200 focus:outline-none focus:ring-[#882EFD] focus:border-[#882EFD] sm:text-sm rounded-md text-left"
          >
            {selected || 'Workspace Name'}
            <img src={Down} alt="Down" />
          </button>
          {isOpen && (
            <ul className="absolute z-10 mt-1 bg-[#F7F7F8] border border-[#882EFD] rounded-md shadow-lg xs:w-[10rem] lg:w-[19.6rem]">
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
      </div>
      <div className="flex justify-between items-center xs:gap-5 lg:gap-5">
        <div className="flex justify-between items-center xs:gap-4 xs:mr-10">
          <img src={search} alt="search" className="w-6 cursor-pointer" />
          <img src={speaker} alt="speaker" className="w-6 cursor-pointer" />
        </div>
        <div className="flex justify-between items-center xs:gap-3 lg:gap-4">
          <img src={help} alt="help" className="w-6 cursor-pointer xs:hidden md:block" />
          <img src={bell} alt="bell" className="w-6 cursor-pointer xs:hidden md:block" />
          <img src={pluse} alt="plus" className="w-6 cursor-pointer xs:hidden md:block" />
          <div className="flex gap-1 justify-center items-center cursor-pointer">
            <img src={profile} alt="profile" className="xs:w-12 sm:w-9" />
            <img src={Down} alt="down" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
