import React from "react";
import Pie from "../assets/Icons/pie.svg";
import user from "../assets/Icons/user.svg";
import setting from "../assets/Icons/setting.svg";
import glob from "../assets/Icons/glob.svg";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-48 flex flex-col gap-2 min-h-[90svh] px-4 py-5">
      <Link to="/dashboard">
        <div className="flex justify-start items-center group gap-2 rounded-sm hover:bg-[#E7D5FF] overflow-hidden cursor-pointer">
          <div className="group-hover:bg-[#D3CCDC] rounded-sm w-9 h-9 flex justify-center items-center">
            <img src={Pie} alt="dashboard" className="" />
          </div>
          <div>
            <h2 className="">Dashboard</h2>
          </div>
        </div>
      </Link>
      <Link to="/dashboard/sites">
        <div className="flex justify-start items-center group gap-2 rounded-sm hover:bg-[#E7D5FF] overflow-hidden cursor-pointer">
          <div className="group-hover:bg-[#D3CCDC] rounded-sm w-9 h-9 flex justify-center items-center">
            <img src={glob} alt="dashboard" className="" />
          </div>
          <div>
            <h2 className="">Sites</h2>
          </div>
        </div>
      </Link>
      <Link to="/dashboard/teams">
        <div className="flex justify-start items-center group gap-2 rounded-sm hover:bg-[#E7D5FF] overflow-hidden cursor-pointer">
          <div className="group-hover:bg-[#D3CCDC] rounded-sm w-9 h-9 flex justify-center items-center">
            <img src={user} alt="dashboard" className="" />
          </div>
          <div>
            <h2 className="">Teams</h2>
          </div>
        </div>
      </Link>
      <Link to="/dashboard/settings">
        <div className="flex justify-start items-center group gap-2 rounded-sm hover:bg-[#E7D5FF] overflow-hidden cursor-pointer">
          <div className="group-hover:bg-[#D3CCDC] rounded-sm w-9 h-9 flex justify-center items-center">
            <img src={setting} alt="dashboard" className="" />
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
