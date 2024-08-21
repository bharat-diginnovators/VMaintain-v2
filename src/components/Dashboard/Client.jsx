import React from "react";
import editIcon from "../../assets/Icons/edit.svg";
import deleteIcon from "../../assets/Icons/globblue.svg";
import viewIcon from "../../assets/Icons/view.svg";
import add from "../../assets/Icons/add.svg";
import { clients } from "../../Data/data";


const Client = () => {
  return (
    <div className="p-4 border-[1px] rounded-md overflow-hidden ">
      <div className="flex justify-between items-center pr-2">
        <div>
          <h2 className="font-medium py-2">Clients</h2>
        </div>
        <div>
          <button>
            <img src={add} alt="add-icon" />
          </button>
        </div>
      </div>
      <p className="py-2">Clients Information</p>
      <div className="h-[246px] overflow-y-auto overflow-x-auto border-[1px] rounded-sm custom-scrollbar">
        <table className="min-w-full bg-white rounded-sm overflow-hidden">
          <thead >
            <tr className="bg-[#F7F7F8] !sticky top-[.2px]" >
              <th className="py-2 text-left px-2  border-b">Client Name</th>
              <th className="py-2 text-left px-2 border-b">Email</th>
              <th className="py-2 text-left px-2 border-b">Contact</th>
              <th className="py-2 text-left px-2 border-b"></th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => (
              <tr key={client.id}>
                <td className="py-2 px-2 border-b">{client.name}</td>
                <td className="py-2 px-2 border-b">{client.email}</td>
                <td className="py-2 px-2 border-b">{client.contact}</td>
                <td className="py-3 px-2 flex gap-6 border-b justify-center items-center">
                  <button className="">
                    <img src={viewIcon} alt="view" className="w-6 h-6" />
                  </button>
                  <button>
                    <img src={editIcon} alt="edit" className="w-6 h-6" />
                  </button>
                  <button>
                    <img src={deleteIcon} alt="delete" className="w-6 h-6" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Client;
