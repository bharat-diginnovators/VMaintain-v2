import React, { useState } from "react";
import DataTable from "react-data-table-component";
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

const data = [
  {
    id: 1,
    status: "active",
    site: "Twist Expansion",
    client: [
      "https://avatar.iran.liara.run/public/2",
      "https://avatar.iran.liara.run/public/3",
      "https://avatar.iran.liara.run/public/4",
    ],
    tags: ["Tags", "Stag", "Product", "Development"],
    update: 0,
    wordpress: 0,
    plugins: 0,
    themes: 0,
    lastSyn: "May 24, 2024 - 4:52 PM",
    siteHealth: { color: "green", status: "Good" },
    statusCode: "200 OK",
    connected: "May 25, 2024",
    siteURL: "www.site.example.com",
  },
  {
    id: 2,
    status: "inactive",
    site: "Twist Expansion",
    client: [
      "https://avatar.iran.liara.run/public/5",
      "https://avatar.iran.liara.run/public/6",
    ],
    tags: ["Tags", "Development"],
    update: 0,
    wordpress: 0,
    plugins: 0,
    themes: 0,
    lastSyn: "May 22, 2024 - 1:30 PM",
    siteHealth: { color: "red", status: "Bad" },
    statusCode: "404 Not Found",
    connected: "May 23, 2024",
    siteURL: "www.site.example.com",
  },
  {
    id: 3,
    status: "active",
    site: "Twist Expansion",
    client: [
      "https://avatar.iran.liara.run/public/7",
      "https://avatar.iran.liara.run/public/8",
      "https://avatar.iran.liara.run/public/9",
      "https://avatar.iran.liara.run/public/10",
    ],
    tags: ["Stag", "Product", "Development"],
    update: 0,
    wordpress: 0,
    plugins: 0,
    themes: 0,
    lastSyn: "May 23, 2024 - 2:15 PM",
    siteHealth: { color: "orange", status: "Worst" },
    statusCode: "500 Internal Server Error",
    connected: "May 24, 2024",
    siteURL: "www.site.example.com",
  },
  {
    id: 4,
    status: "inactive",
    site: "Twist Expansion",
    client: [
      "https://avatar.iran.liara.run/public/11",
      "https://avatar.iran.liara.run/public/12",
    ],
    tags: ["Tags", "Development", "Plugins"],
    update: 0,
    wordpress: 0,
    plugins: 0,
    themes: 0,
    lastSyn: "May 21, 2024 - 3:45 PM",
    siteHealth: { color: "green", status: "Good" },
    statusCode: "200 OK",
    connected: "May 22, 2024",
    siteURL: "www.site.example.com",
  },
  {
    id: 5,
    status: "active",
    site: "Twist Expansion",
    client: [
      "https://avatar.iran.liara.run/public/13",
      "https://avatar.iran.liara.run/public/14",
      "https://avatar.iran.liara.run/public/15",
    ],
    tags: ["Tags", "Stag", "Development", "Product"],
    update: 0,
    wordpress: 0,
    plugins: 0,
    themes: 0,
    lastSyn: "May 20, 2024 - 10:00 AM",
    siteHealth: { color: "red", status: "Bad" },
    statusCode: "403 Forbidden",
    connected: "May 21, 2024",
    siteURL: "www.site.example.com",
  },
  {
    id: 6,
    status: "inactive",
    site: "ProDev Agency",
    client: [
      "https://avatar.iran.liara.run/public/16",
      "https://avatar.iran.liara.run/public/17",
    ],
    tags: ["Plugins", "Development"],
    update: 0,
    wordpress: 0,
    plugins: 0,
    themes: 0,
    lastSyn: "May 19, 2024 - 8:30 AM",
    siteHealth: { color: "yellow", status: "Warning" },
    statusCode: "302 Found",
    connected: "May 20, 2024",
    siteURL: "www.site.example.com",
  },
  {
    id: 7,
    status: "active",
    site: "Design Matrix",
    client: ["https://avatar.iran.liara.run/public/18"],
    tags: ["Design", "UI", "UX"],
    update: 0,
    wordpress: 0,
    plugins: 0,
    themes: 0,
    lastSyn: "May 18, 2024 - 11:00 AM",
    siteHealth: { color: "green", status: "Good" },
    statusCode: "200 OK",
    connected: "May 19, 2024",
    siteURL: "www.site.example.com",
  },
  {
    id: 8,
    status: "active",
    site: "Creative Hub",
    client: [
      "https://avatar.iran.liara.run/public/19",
      "https://avatar.iran.liara.run/public/20",
      "https://avatar.iran.liara.run/public/21",
    ],
    tags: ["Creative", "Marketing"],
    update: 0,
    wordpress: 0,
    plugins: 0,
    themes: 0,
    lastSyn: "May 17, 2024 - 2:45 PM",
    siteHealth: { color: "green", status: "Good" },
    statusCode: "200 OK",
    connected: "May 18, 2024",
    siteURL: "www.site.example.com",
  },
  {
    id: 9,
    status: "inactive",
    site: "Tech Evolution",
    client: ["https://avatar.iran.liara.run/public/22"],
    tags: ["Technology", "Development"],
    update: 0,
    wordpress: 0,
    plugins: 0,
    themes: 0,
    lastSyn: "May 16, 2024 - 4:15 PM",
    siteHealth: { color: "red", status: "Bad" },
    statusCode: "404 Not Found",
    connected: "May 17, 2024",
    siteURL: "www.site.example.com",
  },
  {
    id: 10,
    status: "active",
    site: "Web Innovators",
    client: [
      "https://avatar.iran.liara.run/public/23",
      "https://avatar.iran.liara.run/public/24",
      "https://avatar.iran.liara.run/public/25",
    ],
    tags: ["Web", "Innovation"],
    update: 0,
    wordpress: 0,
    plugins: 0,
    themes: 0,
    lastSyn: "May 15, 2024 - 9:00 AM",
    siteHealth: { color: "green", status: "Good" },
    statusCode: "200 OK",
    connected: "May 16, 2024",
    siteURL: "www.site.example.com",
  },
  {
    id: 11,
    status: "inactive",
    site: "Marketing Masters",
    client: ["https://avatar.iran.liara.run/public/26"],
    tags: ["Marketing", "SEO"],
    update: 0,
    wordpress: 0,
    plugins: 0,
    themes: 0,
    lastSyn: "May 14, 2024 - 3:30 PM",
    siteHealth: { color: "orange", status: "Critical" },
    statusCode: "500 Internal Server Error",
    connected: "May 15, 2024",
    siteURL: "www.site.example.com",
  },
  {
    id: 12,
    status: "active",
    site: "Creative Minds",
    client: [
      "https://avatar.iran.liara.run/public/27",
      "https://avatar.iran.liara.run/public/28",
    ],
    tags: ["Creative", "Design"],
    update: 0,
    wordpress: 0,
    plugins: 0,
    themes: 0,
    lastSyn: "May 13, 2024 - 10:45 AM",
    siteHealth: { color: "green", status: "Good" },
    statusCode: "200 OK",
    connected: "May 14, 2024",
    siteURL: "www.site.example.com",
  },
  {
    id: 13,
    status: "inactive",
    site: "Business Solutions",
    client: [
      "https://avatar.iran.liara.run/public/29",
      "https://avatar.iran.liara.run/public/30",
    ],
    tags: ["Business", "Solutions"],
    update: 0,
    wordpress: 0,
    plugins: 0,
    themes: 0,
    lastSyn: "May 12, 2024 - 12:00 PM",
    siteHealth: { color: "red", status: "Bad" },
    statusCode: "404 Not Found",
    connected: "May 13, 2024",
    siteURL: "www.site.example.com",
  },
  {
    id: 14,
    status: "active",
    site: "Digital Strategy",
    client: ["https://avatar.iran.liara.run/public/31"],
    tags: ["Strategy", "Digital"],
    update: 0,
    wordpress: 0,
    plugins: 0,
    themes: 0,
    lastSyn: "May 11, 2024 - 4:00 PM",
    siteHealth: { color: "green", status: "Good" },
    statusCode: "200 OK",
    connected: "May 12, 2024",
    siteURL: "www.site.example.com",
  },
  {
    id: 15,
    status: "inactive",
    site: "Tech Savvy",
    client: [
      "https://avatar.iran.liara.run/public/32",
      "https://avatar.iran.liara.run/public/33",
    ],
    tags: ["Technology", "Development", "Plugins"],
    update: 0,
    wordpress: 0,
    plugins: 0,
    themes: 0,
    lastSyn: "May 10, 2024 - 9:30 AM",
    siteHealth: { color: "yellow", status: "Warning" },
    statusCode: "302 Found",
    connected: "May 11, 2024",
    siteURL: "www.site.example.com",
  },
  {
    id: 16,
    status: "active",
    site: "Creative Insights",
    client: [
      "https://avatar.iran.liara.run/public/34",
      "https://avatar.iran.liara.run/public/35",
    ],
    tags: ["Creative", "Design", "Insights"],
    update: 0,
    wordpress: 0,
    plugins: 0,
    themes: 0,
    lastSyn: "May 9, 2024 - 11:15 AM",
    siteHealth: { color: "green", status: "Good" },
    statusCode: "200 OK",
    connected: "May 10, 2024",
    siteURL: "www.site.example.com",
  },
  {
    id: 17,
    status: "inactive",
    site: "Web Solutions",
    client: ["https://avatar.iran.liara.run/public/36"],
    tags: ["Web", "Development"],
    update: 0,
    wordpress: 0,
    plugins: 0,
    themes: 0,
    lastSyn: "May 8, 2024 - 1:45 PM",
    siteHealth: { color: "red", status: "Bad" },
    statusCode: "404 Not Found",
    connected: "May 9, 2024",
    siteURL: "www.site.example.com",
  },
  {
    id: 18,
    status: "active",
    site: "Business Growth",
    client: [
      "https://avatar.iran.liara.run/public/37",
      "https://avatar.iran.liara.run/public/38",
      "https://avatar.iran.liara.run/public/39",
    ],
    tags: ["Business", "Growth"],
    update: 0,
    wordpress: 0,
    plugins: 0,
    themes: 0,
    lastSyn: "May 7, 2024 - 8:00 AM",
    siteHealth: { color: "green", status: "Good" },
    statusCode: "200 OK",
    connected: "May 8, 2024",
    siteURL: "www.site.example.com",
  },
  {
    id: 19,
    status: "inactive",
    site: "Design Works",
    client: ["https://avatar.iran.liara.run/public/40"],
    tags: ["Design", "Works"],
    update: 0,
    wordpress: 0,
    plugins: 0,
    themes: 0,
    lastSyn: "May 6, 2024 - 2:30 PM",
    siteHealth: { color: "orange", status: "Critical" },
    statusCode: "500 Internal Server Error",
    connected: "May 7, 2024",
    siteURL: "www.site.example.com",
  },
  {
    id: 20,
    status: "active",
    site: "Innovative Tech",
    client: [
      "https://avatar.iran.liara.run/public/41",
      "https://avatar.iran.liara.run/public/42",
    ],
    tags: ["Technology", "Innovation"],
    update: 0,
    wordpress: 0,
    plugins: 0,
    themes: 0,
    lastSyn: "May 5, 2024 - 3:45 PM",
    siteHealth: { color: "green", status: "Good" },
    statusCode: "200 OK",
    connected: "May 6, 2024",
    siteURL: "www.site.example.com",
  },
  {
    id: 21,
    status: "inactive",
    site: "Marketing Gurus",
    client: ["https://avatar.iran.liara.run/public/43"],
    tags: ["Marketing", "SEO"],
    update: 0,
    wordpress: 0,
    plugins: 0,
    themes: 0,
    lastSyn: "May 4, 2024 - 10:15 AM",
    siteHealth: { color: "red", status: "Bad" },
    statusCode: "404 Not Found",
    connected: "May 5, 2024",
    siteURL: "www.site.example.com",
  },
  {
    id: 22,
    status: "active",
    site: "Digital Pros",
    client: [
      "https://avatar.iran.liara.run/public/44",
      "https://avatar.iran.liara.run/public/45",
    ],
    tags: ["Digital", "Professionals"],
    update: 0,
    wordpress: 0,
    plugins: 0,
    themes: 0,
    lastSyn: "May 3, 2024 - 4:30 PM",
    siteHealth: { color: "green", status: "Good" },
    statusCode: "200 OK",
    connected: "May 4, 2024",
    siteURL: "www.site.example.com",
  },
  {
    id: 23,
    status: "inactive",
    site: "Tech Wizards",
    client: [
      "https://avatar.iran.liara.run/public/46",
      "https://avatar.iran.liara.run/public/47",
    ],
    tags: ["Technology", "Development"],
    update: 0,
    wordpress: 0,
    plugins: 0,
    themes: 0,
    lastSyn: "May 2, 2024 - 8:30 AM",
    siteHealth: { color: "yellow", status: "Warning" },
    statusCode: "302 Found",
    connected: "May 3, 2024",
    siteURL: "www.site.example.com",
  },
  {
    id: 24,
    status: "active",
    site: "Design Pros",
    client: ["https://avatar.iran.liara.run/public/2"],
    tags: ["Design", "UI", "UX"],
    update: 0,
    wordpress: 0,
    plugins: 0,
    themes: 0,
    lastSyn: "May 1, 2024 - 1:00 PM",
    siteHealth: { color: "green", status: "Good" },
    statusCode: "200 OK",
    connected: "May 2, 2024",
    siteURL: "www.site.example.com",
  },
  {
    id: 25,
    status: "inactive",
    site: "Marketing Experts",
    client: ["https://avatar.iran.liara.run/public/2"],
    tags: ["Marketing", "SEO"],
    update: 0,
    wordpress: 0,
    plugins: 0,
    themes: 0,
    lastSyn: "April 30, 2024 - 3:45 PM",
    siteHealth: { color: "orange", status: "Critical" },
    statusCode: "500 Internal Server Error",
    connected: "May 1, 2024",
    siteURL: "www.site.example.com",
  },
  {
    id: 26,
    status: "active",
    site: "Business Innovators",
    client: [
      "https://avatar.iran.liara.run/public/48",
      "https://avatar.iran.liara.run/public/49",
    ],
    tags: ["Business", "Innovation"],
    update: 0,
    wordpress: 0,
    plugins: 0,
    themes: 0,
    lastSyn: "April 29, 2024 - 9:15 AM",
    siteHealth: { color: "green", status: "Good" },
    statusCode: "200 OK",
    connected: "April 30, 2024",
    siteURL: "www.site.example.com",
  },
  {
    id: 27,
    status: "inactive",
    site: "Creative Minds",
    client: ["https://avatar.iran.liara.run/public/2"],
    tags: ["Creative", "Design"],
    update: 0,
    wordpress: 0,
    plugins: 0,
    themes: 0,
    lastSyn: "April 28, 2024 - 11:30 AM",
    siteHealth: { color: "red", status: "Bad" },
    statusCode: "404 Not Found",
    connected: "April 29, 2024",
    siteURL: "www.site.example.com",
  },
  {
    id: 28,
    status: "active",
    site: "Tech Experts",
    client: [
      "https://avatar.iran.liara.run/public/52",
      "https://avatar.iran.liara.run/public/55",
    ],
    tags: ["Technology", "Development", "Experts"],
    update: 0,
    wordpress: 0,
    plugins: 0,
    themes: 0,
    lastSyn: "April 27, 2024 - 2:00 PM",
    siteHealth: { color: "green", status: "Good" },
    statusCode: "200 OK",
    connected: "April 28, 2024",
    siteURL: "www.site.example.com",
  },
  {
    id: 29,
    status: "inactive",
    site: "Web Masters",
    client: ["https://avatar.iran.liara.run/public/62"],
    tags: ["Web", "Development"],
    update: 0,
    wordpress: 0,
    plugins: 0,
    themes: 0,
    lastSyn: "April 26, 2024 - 4:15 PM",
    siteHealth: { color: "yellow", status: "Warning" },
    statusCode: "302 Found",
    connected: "April 27, 2024",
    siteURL: "www.site.example.com",
  },
];

const Sites = () => {
  const [entries, setEntries] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRows, setSelectedRows] = useState([]);

  const filteredData = data.filter(
    (item) =>
      item.site.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.siteURL.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.client.some((client) =>
        client.toLowerCase().includes(searchQuery.toLowerCase())
      ) ||
      item.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      )
  );

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
      ), // Header checkbox
      cell: (row) => (
        <Checkbox
          checked={selectedRows.includes(row.id)}
          onChange={() => handleRowSelect(row.id)}
        />
      ), // Row checkbox
      width: "60px",
    },
    {
      name: "Status",
      selector: (row) => (
        <MdRadioButtonChecked
          size={24}
          color={row.status === "active" ? "green" : "gray"}
        />
      ),
      width: "70px",
    },
    {
      name: (
        <div className="flex gap-2 items-center">
         <span><FaWordpress size={20} /></span> 
          {"Site"}
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
    {
      name: (
        <div className="flex gap-1 items-center">
         <span><FaLink className="mr-1" size={20} /></span> 
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
    {
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
    {
      name: "Tag",
      selector: (row) => row.tags.join(", "),
      sortable: true,
    },
    {
      name: "Updates",
      selector: (row) => (<span className="bg-[#882EFD] p-4 text-lg text-white rounded-md">{row.update}</span>),
      sortable: true,
     
    },
    {
      name: "WordPress",
      selector: (row) =>(<span className="bg-[#1c1c1c] p-4 text-lg text-white rounded-md">{row.wordpress}</span>) ,
      sortable: true,
    },
    {
      name: "Plugins",
      selector: (row) =>(<span className="bg-[#F9B023] p-4 text-lg text-white rounded-md">{row.plugins}</span>) ,
      sortable: true,
    },
    {
      name: "Themes",
      selector: (row) =>(<span className="bg-[#00B656] p-4 text-lg text-white rounded-md">{row.themes}</span>) ,
      sortable: true,
    },
    {
      name: "Last Syn",
      selector: (row) => row.lastSyn,
      sortable: true,
    },
    {
      name: "Site Health",
      selector: (row) => (
        <div className="flex items-center">
          <FaCircle color={row.siteHealth.color} className="mr-1" />
          {row.siteHealth.status}
        </div>
      ),
      sortable: true,
    },
    {
      name: "Status Code",
      selector: (row) => row.statusCode,
      sortable: true,
    },
    {
      name: "Connected",
      selector: (row) => row.connected,
      sortable: true,
    },
    {
      name: <FaRegSquarePlus size={20} className="cursor-pointer" />,
      cell: () => <></>,
      width: "60px",
    },
  ];

  return (
    <div className="px-4 py-2 bg-white rounded-lg custom-shadow overflow-x-auto ">
      {/* Header with dropdowns, search, and filters */}
      <div className="flex justify-between items-center mb-4 flex-wrap overflow-x-auto px-2">
        <div className="flex gap-8 items-center">
          <div className="text-lg">
            <p>Sites</p>
          </div>
          <div>
            <label htmlFor="entries" className="px-2 text-[#1c1c1cbd]">
              Show
            </label>
            <select
              id="entries"
              value={entries}
              onChange={(e) => {
                setEntries(Number(e.target.value));
                setCurrentPage(1);
              }}
              className="border border-gray-200 rounded px-8 py-1"
            >
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
            <span className="ml-2 text-[#1c1c1cbd]">entries</span>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4">
          <div className="relative">
            <Input
              id="search"
              name="search"
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full"
              placeholder="Search"
            />
            <button className="absolute  w-9 h-9 right-1 top-2 bg-[#F4F4F4]">
              <img src={search} alt="search" />
            </button>
          </div>
        <div className="flex space-x-4 mb-4">
       
        <Dropdown
          options={["", "active", "inactive"]}
          selected={""}
          onChange={(value) => handleFilterChange("status", value)}
          label="Filter by Status"
          width="400px"
          placeholder="Filter by: Tags"
          menuWidth="900px"

        />
        
        <Dropdown
          options={["", "Good", "Bad", "Worst", "Warning", "Critical"]}
          selected={""}
          onChange={(value) => handleFilterChange("siteHealth", value)}
          label="Filter by Site Health"
          width="400px"
          placeholder="Bulk Actions"

        />
      </div>
          <button className="bg-none border-none custom-shadow p-2 cursor-pointer">
            <RxDashboard  size={20} className="text-[#1c1c1cbd]" />
          </button>
        </div>
      </div>

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
            },
          },
         
        }}
      />

      {/* Pagination and Entries Information */}
      <div className="flex justify-between items-center mt-4 text-[#1c1c1c83]">
        <div>
          Showing {Math.min((currentPage - 1) * entries + 1, totalEntries)} to{" "}
          {Math.min(currentPage * entries, totalEntries)} of {totalEntries}{" "}
          entries
        </div>

        <div className="flex items-center">
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
                      : "bg-[#F0F0F0]  border border-[#882EFD] text-purple-600"
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
  );
};

export default Sites;
