import React from "react";
import { Link, useLocation } from "react-router-dom";
import Pie from "../assets/Icons/pie.svg";
import user from "../assets/Icons/user.svg";
import setting from "../assets/Icons/setting.svg";
import glob from "../assets/Icons/glob.svg";
import { useSelector } from "react-redux";

const Sidebar = () => {

  const location = useLocation();
  const isToggled = useSelector((state)=>state.toggle.isToggled)

  const getActiveClass = (path) => {
    return location.pathname === path ? "bg-[#E7D5FF]" : "";
  };

  return (
    <aside
      className={`${
        isToggled
          ? "w-60 translate-x-0 xs:fixed  lg:sticky "
          : "w-16 xs:w-[0] xs:-translate-x-10 lg:w-[5.5rem] lg:translate-x-0 xs:fixed lg:sticky"
      } top-[4.4rem] left-0 min-h-[90svh] px-5 py-6 bg-[#F7F7F8] transition-all duration-300 ease-in-out z-50 flex flex-col gap-2`}
    >
      <Link to="/dashboard">
        <div
          className={`p-1 flex justify-start items-center gap-2 rounded-[4px] hover:bg-[#E7D5FF] overflow-hidden cursor-pointer ${getActiveClass(
            "/dashboard"
          )}`}
        >
          <div
            className={`rounded-[4px] min-w-9 min-h-9 flex justify-center items-center`}
          >
            <img src={Pie} alt="dashboard" />
          </div>
          {isToggled && (
            <div>
              <h2 className="whitespace-nowrap">Dashboard</h2>
            </div>
          )}
        </div>
      </Link>
      <Link to="/dashboard/sites">
        <div
          className={`p-1 flex justify-start items-center gap-2 rounded-[4px] hover:bg-[#E7D5FF] overflow-hidden cursor-pointer ${getActiveClass(
            "/dashboard/sites"
          )}`}
        >
          <div
            className={`rounded-[4px] min-w-9 min-h-9 flex justify-center items-center`}
          >
            <img src={glob} alt="sites" />
          </div>
          {isToggled && (
            <div>
              <h2 className="whitespace-nowrap">Sites</h2>
            </div>
          )}
        </div>
      </Link>
      <Link to="/dashboard/teams">
        <div
          className={`p-1 flex justify-start items-center gap-2 rounded-[4px] hover:bg-[#E7D5FF] overflow-hidden cursor-pointer ${getActiveClass(
            "/dashboard/teams"
          )}`}
        >
          <div
            className={`rounded-[4px] min-w-9 min-h-9 flex justify-center items-center`}
          >
            <img src={user} alt="teams" />
          </div>
          {isToggled && (
            <div>
              <h2 className="whitespace-nowrap">Teams</h2>
            </div>
          )}
        </div>
      </Link>
      <Link to="/dashboard/settings">
        <div
          className={`p-1 flex justify-start items-center gap-2 rounded-[4px] hover:bg-[#E7D5FF] overflow-hidden cursor-pointer ${getActiveClass(
            "/dashboard/settings"
          )}`}
        >
          <div
            className={`rounded-[4px] min-w-9 min-h-9 flex justify-center items-center`}
          >
            <img src={setting} alt="settings" />
          </div>
          {isToggled && (
            <div>
              <h2 className="whitespace-nowrap">Settings</h2>
            </div>
          )}
        </div>
      </Link>
    </aside>
  );
};

export default Sidebar;
