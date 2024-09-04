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

import { Link } from "react-router-dom";
import reload from "../assets/Icons/reload.svg";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../Slices/toggleSlice";

const Header = () => {
  const options = ["Workspace 1", "Workspace 2", "Workspace 3", "Workspace 4"];

  const dispatch = useDispatch();
  const profileImage = useSelector((state)=> state.profile.profileImage)
   
  // console.log(profileImage)
  // console.log(toggleSidebar)
  const handleIsToggled = () => {
    dispatch(toggle());
  };

  const handleSelection = (selectedOption) => {
    // console.log("Selected option:", selectedOption);
  };

  return (
    <header className="border-b flex justify-between items-center px-5 py-4 bg-white z-[9999]">
      <div className="flex justify-between items-center xs:gap-10 sm:gap-15 xs:w-[20rem] lg:gap-20 lg:w-[34rem]">
        <div className="flex justify-between items-center gap-5 ">
          <button onClick={handleIsToggled}>
            <img
              src={menuIcon}
              alt="menu"
              className="xs:min-w-[1rem] md:min-w-[1.5rem] lg:min-w-[1.5rem] "
            />
          </button>
          <a href="/dashboard">
            <img
              src={logoIcon}
              alt="logo"
              className="xs:max-w-[3.5rem] md:min-w-[4rem] lg:w-[2rem]"
            />
          </a>
        </div>
        <div className="  xs:hidden md:block">
          <div>
            <Dropdown
              options={options}
              onSelect={handleSelection}
              width="md:!w-[15rem] lg:!w-[20rem]"
              placeholder="Workspace Name"
              menuWidth="md:w-[15rem] lg:lg:w-[20rem]"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center xs:gap-5 lg:gap-5">
        <div className="xs:ml-[-50px] md:ml-[-0px] flex justify-between items-center xs:gap-4">
          <img src={searchIcon} alt="search" className="w-6 cursor-pointer" />
          <img src={speakerIcon} alt="speaker" className="w-6 cursor-pointer" />
          <img
            src={reload}
            alt="speaker"
            className="w-6 cursor-pointer xs:hidden md:block"
          />
        </div>
        <div className="  flex justify-between items-center xs:gap-3 lg:gap-4">
          <img
            src={helpIcon}
            alt="help"
            className="w-6 cursor-pointer xs:hidden md:block"
          />
          <img
            src={bellIcon}
            alt="bell"
            className="w-6 cursor-pointer xs:hidden md:block"
          />
          <img
            src={plusIcon}
            alt="plus"
            className="w-6 cursor-pointer xs:hidden md:block"
          />
          <div className=" flex gap-1 justify-center items-center cursor-pointer">
            <Link
              to="/dashboard/profile"
              className="xs:ml-5 md:ml-0 flex gap-1 justify-center items-center cursor-pointer"
            >
              <img src={profileImage || profileIcon} alt="profile" className="xs:w-12 xs:h-12 sm:w-9  sm:h-9 rounded-full border-[1px] border-[#882EFD]" />
              <img src={downIcon} alt="down" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
