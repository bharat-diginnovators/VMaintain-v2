import React from "react";
import { Link, useLocation } from "react-router-dom";
import Pie from "../assets/Icons/pie.svg";
import user from "../assets/Icons/user.svg";
import setting from "../assets/Icons/setting.svg";
import glob from "../assets/Icons/glob.svg";
import { useSidebar } from "../utils/context";

const Sidebar = () => {
  const { isSidebarOpen } = useSidebar();
  const location = useLocation();

  const getActiveClass = (path) => {
    return location.pathname === path ? "bg-[#E7D5FF]" : "";
  };

  return (
    <aside
      className={`${
        isSidebarOpen
          ? "sticky translate-x-0 md:translate-x-0"
          : "fixed -translate-x-full md:-translate-x-full"
      } top-[4.4rem] left-0 w-48 min-h-[90svh] px-4 py-5 bg-[#F7F7F8] transition-transform duration-300 ease-in-out z-50 flex flex-col gap-2`}
    >
      <Link to="/dashboard">
        <div
          className={`flex justify-start items-center group gap-2 rounded-sm hover:bg-[#E7D5FF] overflow-hidden cursor-pointer ${getActiveClass(
            "/dashboard"
          )}`}
        >
          <div
            className={`rounded-sm w-9 h-9 flex justify-center items-center ${
              location.pathname === "/dashboard" ? "bg-[#D3CCDC]" : "group-hover:bg-[#D3CCDC]"
            }`}
          >
            <img src={Pie} alt="dashboard" />
          </div>
          <div>
            <h2 className="">Dashboard</h2>
          </div>
        </div>
      </Link>
      <Link to="/dashboard/sites">
        <div
          className={`flex justify-start items-center group gap-2 rounded-sm hover:bg-[#E7D5FF] overflow-hidden cursor-pointer ${getActiveClass(
            "/dashboard/sites"
          )}`}
        >
          <div
            className={`rounded-sm w-9 h-9 flex justify-center items-center ${
              location.pathname === "/dashboard/sites" ? "bg-[#D3CCDC]" : "group-hover:bg-[#D3CCDC]"
            }`}
          >
            <img src={glob} alt="sites" />
          </div>
          <div>
            <h2 className="">Sites</h2>
          </div>
        </div>
      </Link>
      <Link to="/dashboard/teams">
        <div
          className={`flex justify-start items-center group gap-2 rounded-sm hover:bg-[#E7D5FF] overflow-hidden cursor-pointer ${getActiveClass(
            "/dashboard/teams"
          )}`}
        >
          <div
            className={`rounded-sm w-9 h-9 flex justify-center items-center ${
              location.pathname === "/dashboard/teams" ? "bg-[#D3CCDC]" : "group-hover:bg-[#D3CCDC]"
            }`}
          >
            <img src={user} alt="teams" />
          </div>
          <div>
            <h2 className="">Teams</h2>
          </div>
        </div>
      </Link>
      <Link to="/dashboard/settings">
        <div
          className={`flex justify-start items-center group gap-2 rounded-sm hover:bg-[#E7D5FF] overflow-hidden cursor-pointer ${getActiveClass(
            "/dashboard/settings"
          )}`}
        >
          <div
            className={`rounded-sm w-9 h-9 flex justify-center items-center ${
              location.pathname === "/dashboard/settings" ? "bg-[#D3CCDC]" : "group-hover:bg-[#D3CCDC]"
            }`}
          >
            <img src={setting} alt="settings" />
          </div>
          <div>
            <h2 className="">Settings</h2>
          </div>
        </div>
      </Link>
    </aside>
  );
};

export default Sidebar;
