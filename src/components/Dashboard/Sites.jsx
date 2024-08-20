import React, { useState } from "react";
import DataTable, { Alignment } from "react-data-table-component";
import {
  FaRegSquarePlus,
  FaAngleLeft,
  FaLink,
  FaWordpress,
} from "react-icons/fa6";

import { FaCircle } from "react-icons/fa";
import Input from "../../Core/Input";
import search from "../../assets/Icons/Mask group.svg";
import Checkbox from "../../Core/Checkbox";
import { MdRadioButtonChecked } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import Dropdown from "../../Core/Dropdown";
import Columns from "./Modals/Columns";

import { data } from "../../Data/data";

const Sites = () => {
  const [entries, setEntries] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRows, setSelectedRows] = useState([]);
  const [modal, setModal] = useState(false);

  const [statusFilter, setStatusFilter] = useState("");
  const [siteHealthFilter, setSiteHealthFilter] = useState("");

  const totalColumns = [
    "Site", "Site URL", "Updates", "Plugins", "Themes", 
   "Last Syn", "Site Health", "Status Code", "Connected", "Client", "Tag"
 ];


  const [visibleColumns, setVisibleColumns] = useState([
    "Themes",
    "Site",
    "Site URL",
    "Updates",
    "Plugins",
    "Last Syn",
    "Site Health"
  ]);

  const handleModal = () => {
    setModal(!modal);
  };

  const filteredData = data.filter((item) => {
    const matchesSearchQuery =
      item.site.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.siteURL.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.client.some((client) =>
        client.toLowerCase().includes(searchQuery.toLowerCase())
      ) ||
      item.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );

    const matchesStatusFilter = statusFilter
      ? item.tags.some((tag) => tag === statusFilter)
      : true;

    const matchesSiteHealthFilter = siteHealthFilter
      ? item.siteHealth.status === siteHealthFilter
      : true;

    return matchesSearchQuery && matchesStatusFilter && matchesSiteHealthFilter;
  });

  const handleFilterChange = (filterType, value) => {
    // console.log("Filter change detected:", filterType, value); 
    if (filterType === "status") {
      setStatusFilter(value);
    } else if (filterType === "siteHealth") {
      setSiteHealthFilter(value);
    }
    else if (filterType === "entries") {
      setEntries(Number(value));
    }
    setCurrentPage(1);
  };

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
          checked={selectedRows.length === filteredData.length}
          onChange={handleSelectAll}
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
    visibleColumns.includes("Status") && {
      name: "Status",
      selector: (row) => (
        <MdRadioButtonChecked
          size={24}
          color={row.status === "active" ? "green" : "gray"}
        />
      ),
      width: "90px",
    },
    visibleColumns.includes("Site") && {
      name: (
        <div className="flex">
          <p>{"Site"}</p>
        </div>
      ),
      selector: (row) => (
        <div className="flex gap-1 justify-between items-center">
          <span>
            <FaWordpress size={20} />
          </span>
          {row.site}
        </div>
      ),
      width: "150px",
      sortable: true,
    },
    visibleColumns.includes("Site URL") && {
      name: (
        <div className="flex gap-1 items-center">
          <span>
            <FaLink className="mr-1" size={20} />
          </span>
          {"Site URL"}
        </div>
      ),
      selector: (row) => (
        <div className="flex items-center">
          <FaLink className="mr-1" size={20} />
          <a
            href={row.siteURL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            {row.siteURL}
          </a>
        </div>
      ),
      width: "200px",
      sortable: true,
    },
    visibleColumns.includes("Client") && {
      name: "Client",
      selector: (row) => (
        <div className="flex">
          {row.client.map((imgSrc, index) => (
            <img
              key={index}
              src={imgSrc}
              alt="Client Avatar"
              className="w-8 h-8 rounded-full border-2 border-white -ml-2 first:ml-0"
            />
          ))}
        </div>
      ),
      width: "140px",
      sortable: true,
    },
    visibleColumns.includes("Tag") && {
      name: "Tag",
      selector: (row) => row.tags.join(", "),
      sortable: true,
    },
    visibleColumns.includes("Updates") && {
      name: "Updates",
      selector: (row) => (
        <span className="bg-[#882EFD] p-4 text-lg text-white rounded-md">
          {row.update}
        </span>
      ),
      sortable: true,
    },
    visibleColumns.includes("WordPress") && {
      name: "WordPress",
      selector: (row) => (
        <span className="bg-[#1c1c1c] p-4 text-lg text-white rounded-md">
          {row.wordpress}
        </span>
      ),
      sortable: true,
      width: "130px",
    },
    visibleColumns.includes("Plugins") && {
      name: "Plugins",
      selector: (row) => (
        <span className="bg-[#F9B023] p-4 text-lg text-white rounded-md">
          {row.plugins}
        </span>
      ),
      sortable: true,
    },
    visibleColumns.includes("Themes") && {
      name: "Themes",
      selector: (row) => (
        <span className="bg-[#00B656] p-4 text-lg text-white rounded-md">
          {row.themes}
        </span>
      ),
      sortable: true,
    },
    visibleColumns.includes("Last Syn") && {
      name: "Last Syn",
      selector: (row) => row.lastSyn,
      sortable: true,
      width:"180px"
    },
    visibleColumns.includes("Site Health") && {
      name: "Site Health",
      selector: (row) => (
        <div className="flex items-center">
          <FaCircle color={row.siteHealth.color} className="mr-1" />
          {row.siteHealth.status}
        </div>
      ),
      width: "130px",
      sortable: true,
     
    },
    visibleColumns.includes("Status Code") && {
      name: "Status Code",
      selector: (row) => row.statusCode,
      sortable: true,
      width: "150px",
    },
    visibleColumns.includes("Connected") && {
      name: "Connected",
      selector: (row) => row.connected,
      sortable: true,
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
            totalColumns= {totalColumns}
          />
        </div>
      )}
      <div className="flex justify-between items-center mb-4 px-2 custom-scrollbar ">
        <div className="flex gap-8 items-center">
          <div className="text-lg">
            <p>Sites</p>
          </div>
          <div className="flex justify-between items-center">
            <div>
            <label htmlFor="entries" className="px-2">
              Show
            </label>
            </div>
        
          
            <Dropdown
              options={["10", "25", "50", "100"]}
              onSelect={(value) => handleFilterChange("entries", value)}
              label="10"
              width="w-[60px]"
              placeholder="10"
              menuWidth="w-[60px]"
              bgColor="bg-white"
            />
            <div>
            <span className="ml-2 ">entries</span>

            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 ">
          <div className="relative">
            <Input
              id="search"
              name="search"
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-[180px] !py-[6px] bg-white mb-1"
              placeholder="Search"
            />
            <button className="absolute  w-5 h-5 right-2 top-3 ">
              <img src={search} alt="search" />
            </button>
          </div>
          <div>
            <Dropdown
              options={["Tags", "Stag", "Product", "Development"]}
              onSelect={(value) => handleFilterChange("status", value)}
              label="Filter by Status"
              width="w-[140px]"
              placeholder="Filter by: Tags"
              menuWidth="w-[140px]"
              bgColor="bg-white"
            />
          </div>
          <div>
            <Dropdown
              options={["Good", "Bad", "Worst", "Warning", "Critical"]}
              onSelect={(value) => handleFilterChange("siteHealth", value)}
              label="Filter by Site Health"
              width="w-[150px]"
              placeholder="Bulk Actions"
              bgColor="bg-white"
            />
          </div>

          <div className="">
            <button className="bg-none border-none custom-shadow p-1.5 cursor-pointer">
              <RxDashboard size={20} className="text-[#1c1c1c]" />
            </button>
          </div>
        </div>
      </div>
      <div className="relative  bg-white rounded-lg custom-shadow m-2">
        {/* Header with dropdowns, search, and filters */}

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
                fontWeight: "600",
                fontSize: "15px",
              },
            },
          }}
        />

        {/* Pagination and Entries Information */}
        <div className="p-4  flex justify-between items-center flex-wrap mt-4 text-[#1c1c1c83] custom-scrollbar">
          <div>
            Showing {Math.min((currentPage - 1) * entries + 1, totalEntries)} to{" "}
            {Math.min(currentPage * entries, totalEntries)} of {totalEntries}{" "}
            entries
          </div>

          <div className="flex items-center custom-scrollbar ">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              className="p-2 bg-none border border-[#882EFD] rounded-full mr-2"
              disabled={currentPage === 1}
            >
              <FaAngleLeft />
            </button>
            {Array.from({ length: 3 }, (_, index) => {
              const pageNumber = currentPage + index - 1;
              if (pageNumber > 0 && pageNumber <= totalPages) {
                return (
                  <span
                    key={pageNumber}
                    className={`h-9 w-9 text-white rounded-full mr-2 flex justify-center items-center cursor-pointer ${
                      pageNumber === currentPage
                        ? "bg-[#882EFD]"
                        : "bg-[#F0F0F0]  border border-[#882EFD] !text-purple-600"
                    }`}
                    onClick={() => handlePageChange(pageNumber)}
                  >
                    {pageNumber}
                  </span>
                );
              }
              return null;
            })}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              className="p-2 bg-none border border-[#882EFD] rounded-full"
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

export default Sites;
