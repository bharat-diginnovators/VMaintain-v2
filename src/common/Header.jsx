import React from "react";

import menuIcon from "../assets/Icons/Vector.svg";
import logoIcon from "../assets/react.svg";
import searchIcon from "../assets/Icons/Mask group.svg";
import speakerIcon from "../assets/Icons/Mask group (1).svg";
import helpIcon from "../assets/Icons/Mask group (2).svg";
import bellIcon from "../assets/Icons/Mask group (3).svg";
import plusIcon from "../assets/Icons/Mask group (4).svg";
import profileIcon from "../assets/profile.svg";
import downIcon from "../assets/Icons/down.svg";
import Dropdown from "../Core/Dropdown";

const Header = () => {
  const options = ["Workspace 1", "Workspace 2", "Workspace 3", "Workspace 4"];

  const handleSelection = (selectedOption) => {
    console.log("Selected option:", selectedOption);
  };

  return (
    <header className="flex justify-between items-center px-5 py-4 bg-white z-[9999]">
      <div className="flex justify-between items-center xs:gap-10 sm:gap-15 xs:w-[20rem] lg:gap-20 lg:w-[30rem]">
        <div className="flex justify-between items-center gap-5 ">
          <button>
            <img src={menuIcon} alt="menu" className="xs:w-[1rem] md:w-[1.4rem]" />
          </button>
          <a href="/">
            <img src={logoIcon} alt="logo" className="xs:w-[2.5rem] md:w-[3.8rem]" />
          </a>
        </div>
        <div className="w-full pl-7">

     
        <Dropdown
          options={options}
          onSelect={handleSelection}
          width="!w-full"
          placeholder="Workspace Name"
          menuWidth="lg:w-[19.6rem]"
        />
           </div>
      </div>
      <div className="flex justify-between items-center xs:gap-5 lg:gap-5">
        <div className="flex justify-between items-center xs:gap-4 xs:mr-10">
          <img src={searchIcon} alt="search" className="w-6 cursor-pointer" />
          <img src={speakerIcon} alt="speaker" className="w-6 cursor-pointer" />
        </div>
        <div className="flex justify-between items-center xs:gap-3 lg:gap-4">
          <img src={helpIcon} alt="help" className="w-6 cursor-pointer xs:hidden md:block" />
          <img src={bellIcon} alt="bell" className="w-6 cursor-pointer xs:hidden md:block" />
          <img src={plusIcon} alt="plus" className="w-6 cursor-pointer xs:hidden md:block" />
          <div className="flex gap-1 justify-center items-center cursor-pointer">
            <img src={profileIcon} alt="profile" className="xs:w-12 sm:w-9" />
            <img src={downIcon} alt="down" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
