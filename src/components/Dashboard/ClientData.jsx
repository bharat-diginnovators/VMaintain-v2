import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { FaRegSquarePlus, FaAngleLeft } from "react-icons/fa6";
import delent from "../../assets/Icons/delent.svg";
import reload from "../../assets/Icons/reload.svg";
import Input from "../../Core/Input";
import search from "../../assets/Icons/Mask group.svg";
import Checkbox from "../../Core/Checkbox";
import Columns from "./Modals/Columns";
import Dropdown from "../../Core/Dropdown";
import { data1 as data } from "../../Data/data";


const ClientData = () => {
  const [entries, setEntries] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRows, setSelectedRows] = useState([]);
  const [modal, setModal] = useState(false);
  const totalColumns = [
    "Email",
    "Client",
    "Role",
    "Status",
    "Created",
    "Actions",
  ];

  const [visibleColumns, setVisibleColumns] = useState([
    "Email",
    "Client",
    "Role",
    "Status",
    "Created",
    "Actions",
  ]);

  // Filtered data based on search query
  const filteredData = data.filter(
    (item) =>
      item.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.status.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.created.toLowerCase().includes(searchQuery.toLowerCase())
  );


  const handleModal = () => {
    setModal(!modal);
  };

 const handleFilterChange = (value) => {
  console.log(value)
    setEntries(Number(value))
 }

  const totalEntries = filteredData.length;
  const totalPages = Math.ceil(totalEntries / entries);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleRowSelect = (rowId) => {
    setSelectedRows((prev) =>
      prev.includes(rowId)
        ? prev.filter((id) => id !== rowId)
        : [...prev, rowId]
    );
  };

  const handleSelectAll = () => {
    if (selectedRows.length === filteredData.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(filteredData.map((row) => row.id));
    }
  };

  const columns = [
    {
      name: (
        <Checkbox
          checked={selectedRows.length === data.length}
          onChange={() => handleSelectAll()}
        />
      ),
      cell: (row) => (
        <Checkbox
          checked={selectedRows.includes(row.id)}
          onChange={() => handleRowSelect(row.id)}
        />
      ),
      width: "60px",
    },
    visibleColumns.includes("Email") && {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    visibleColumns.includes("Client") && {
      name: "Client",
      selector: (row) => row.client,
      sortable: true,
    },
    visibleColumns.includes("Role") && {
      name: "Role",
      selector: (row) => row.role,
      sortable: true,
    },
    visibleColumns.includes("Status") && {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
    },

    visibleColumns.includes("Created") && {
      name: "Created",
      selector: (row) => row.created,
      sortable: true,
    },
    
     visibleColumns.includes("Actions") && { name: "Actions",
      cell: (row) => (
        <div className="flex gap-4">
          <button>
            <img src={reload} alt="reload" />
          </button>
          <button>
            <img src={delent} alt="delete" />
          </button>
        </div>
      ),
      width: "100px",
    },
    {
      name: (
        <div className="">
          <FaRegSquarePlus
            size={20}
            className="cursor-pointer"
            onClick={handleModal}
          />
        </div>
      ),
      cell: () => <></>,
      width: "60px",
    },
  ].filter(Boolean);

  
  return (
    <div className="relative">
      {modal && (
        <div className="absolute right-8 top-24 border-2 border-green-900">
          <Columns
            visibleColumns={visibleColumns}
            setVisibleColumns={setVisibleColumns}
            totalColumns={totalColumns}
          />
        </div>
      )}
      <div className="flex justify-between items-center flex-nowrap mb-4  overflow-x-auto custom-scrollbar ">
        {/* Left Side: Show Entries Dropdown */}
        <div className="flex gap-8 flex-nowrap items-center  px-5">
          <div className="text-xl">
            <p>Clients</p>
          </div>
          <div className="flex flex-nowrap justify-center items-center">
            <div>
            <label htmlFor="entries" className="px-2 text-[#1c1c1c]">
              Show
            </label>
            </div>
           <div>
           <Dropdown
              options={["10", "25", "50", "100"]}
              onSelect={(value) => handleFilterChange(value)}
              label="10"
              width="w-[60px]"
              placeholder="10"
              menuWidth="w-[60px]"
              bgColor="bg-white"
            />
           </div>
              <div>
              <span className="ml-2 text-[#1c1c1c]">entries</span>

              </div>
          </div>
        </div>

        {/* Right Side: Search and Add Client Button */}
        <div className="flex items-center justify-center gap-4">
          <div className="relative">
            <Input
              id="search"
              name="search"
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-white !w-[180px]"
              placeholder="Search"

            />
            <button className="absolute  w-9 h-9 right-1 top-2 ">
              <img src={search} alt="search" />
            </button>
          </div>
          <button className="bg-[#882EFD] text-white px-4 py-2 rounded flex items-center w-[136px]">
            + Add Client
          </button>
        </div>
      </div>
      <div className=" bg-white rounded-lg custom-shadow overflow-x-auto">
        <DataTable
          columns={columns}
          data={filteredData.slice(
            (currentPage - 1) * entries,
            currentPage * entries
          )}
          pagination={false}
          // selectableRows
          customStyles={{
            headCells: {
              style: {
                backgroundColor: "#f0f0f0",
                fontWeight: 600,
              },
            },
          }}
        />
        {/* Pagination and Entries Information */}
        <div className="px-4 py-2 flex justify-between items-center text-[#1c1c1c83]">
          {/* Left Side: Showing Entries Info */}
          <div>
            Showing {Math.min((currentPage - 1) * entries + 1, totalEntries)} to{" "}
            {Math.min(currentPage * entries, totalEntries)} of {totalEntries}{" "}
            entries
          </div>

          {/* Right Side: Pagination Controls */}
          <div className=" flex items-center ">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              className="p-2 bg-none border border-[#882EFD] rounded-full mr-2"
              disabled={currentPage === 1}
            >
              <FaAngleLeft />
            </button>
            <span className="h-9 w-9 text-white bg-[#882EFD] rounded-full mr-2 flex justify-center items-center">
              {currentPage}
            </span>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              className="p-2 bg-none border border-[#882EFD] rounded-full mr-2"
              disabled={currentPage === totalPages}
            >
              <FaAngleLeft className="rotate-180" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientData;
