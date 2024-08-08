import React from "react";
import load from "../../assets/Icons/load.svg";
import menu from "../../assets/Icons/menudots.svg";
import view from "../../assets/Icons/view.svg";

const data = [
  { id: 1, name: "Wordpress", count: "07" },
  { id: 2, name: "Plugins", count: "14" },
  { id: 3, name: "Themes", count: "05" },
  { id: 4, name: "Translations", count: "11" },
];

const Overview = () => {
  return (
    <div className=" h-[358px] p-4 rounded-sm shadow-[0px_0px_3px_rgb(0,0,0,0.2)]">
      <div className="flex justify-between">
        <div>
          <h1 className="font-semibold">Updates Overview</h1>
          <p className="text-sm">Last updated June 20, 2024</p>
          <div className="flex font-medium gap-x-32 py-4">
            <p>Total Updates</p>
            <p>250</p>
          </div>
        </div>
        <div>
          <button>
            <img src={menu} alt="menu" />
          </button>
        </div>
      </div>
      <div className="">
        {data.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-3 gap-4 items-center bg-[#F7F7F8] px-4 py-4 rounded-sm"
          >
            <div className="">
              <p>{item.name}</p>
            </div>
            <div className="font-semibold text-center">
              <p>{item.count}</p>
            </div>
            <div className="flex justify-end gap-4">
              <button>
                <img src={view} alt="view" />
              </button>
              <button>
                <img src={load} alt="load" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Overview;
