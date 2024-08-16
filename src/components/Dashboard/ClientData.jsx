import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { FaRegSquarePlus, FaAngleLeft } from "react-icons/fa6";
import delent from "../../assets/Icons/delent.svg";
import reload from "../../assets/Icons/reload.svg";
import Input from "../../Core/Input";
import search from "../../assets/Icons/Mask group.svg";
import Checkbox from "../../Core/Checkbox";
import Columns from "./Modals/Columns";

const data = [
  {
    id: 1,
    email: "johnsmith+testing@gmail.com",
    client: "John Smith",
    role: "Owner",
    status: "Registered",
    created: "July 25, 2024",
  },
  {
    id: 2,
    email: "watsonp+testing@gmail.com",
    client: "Watson P.",
    role: "Client",
    status: "Invited",
    created: "July 21, 2024",
  },
  {
    id: 3,
    email: "janedoe+testing@gmail.com",
    client: "Jane Doe",
    role: "Admin",
    status: "Active",
    created: "July 18, 2024",
  },
  {
    id: 4,
    email: "roberth+testing@gmail.com",
    client: "Robert H.",
    role: "Client",
    status: "Registered",
    created: "July 28, 2024",
  },
  {
    id: 5,
    email: "emilyt+testing@gmail.com",
    client: "Emily T.",
    role: "Owner",
    status: "Invited",
    created: "July 30, 2024",
  },
  {
    id: 6,
    email: "michaelb+testing@gmail.com",
    client: "Michael B.",
    role: "Client",
    status: "Active",
    created: "July 15, 2024",
  },
  {
    id: 7,
    email: "sarahc+testing@gmail.com",
    client: "Sarah C.",
    role: "Admin",
    status: "Registered",
    created: "July 20, 2024",
  },
  {
    id: 8,
    email: "davidk+testing@gmail.com",
    client: "David K.",
    role: "Owner",
    status: "Invited",
    created: "July 23, 2024",
  },
  {
    id: 9,
    email: "alicem+testing@gmail.com",
    client: "Alice M.",
    role: "Client",
    status: "Active",
    created: "July 22, 2024",
  },
  {
    id: 10,
    email: "jamesr+testing@gmail.com",
    client: "James R.",
    role: "Admin",
    status: "Registered",
    created: "July 27, 2024",
  },
  {
    id: 11,
    email: "helenw+testing@gmail.com",
    client: "Helen W.",
    role: "Client",
    status: "Active",
    created: "July 29, 2024",
  },
  {
    id: 12,
    email: "briank+testing@gmail.com",
    client: "Brian K.",
    role: "Owner",
    status: "Invited",
    created: "July 24, 2024",
  },
  {
    id: 13,
    email: "lindad+testing@gmail.com",
    client: "Linda D.",
    role: "Client",
    status: "Registered",
    created: "July 31, 2024",
  },
  {
    id: 14,
    email: "chrish+testing@gmail.com",
    client: "Chris H.",
    role: "Admin",
    status: "Active",
    created: "July 26, 2024",
  },
  {
    id: 15,
    email: "amyj+testing@gmail.com",
    client: "Amy J.",
    role: "Owner",
    status: "Invited",
    created: "July 17, 2024",
  },
  {
    id: 16,
    email: "peters+testing@gmail.com",
    client: "Peter S.",
    role: "Client",
    status: "Registered",
    created: "July 14, 2024",
  },
  {
    id: 17,
    email: "lucyb+testing@gmail.com",
    client: "Lucy B.",
    role: "Admin",
    status: "Active",
    created: "July 16, 2024",
  },
  {
    id: 18,
    email: "kevinl+testing@gmail.com",
    client: "Kevin L.",
    role: "Client",
    status: "Registered",
    created: "July 19, 2024",
  },
  {
    id: 19,
    email: "ninam+testing@gmail.com",
    client: "Nina M.",
    role: "Owner",
    status: "Invited",
    created: "July 13, 2024",
  },
  {
    id: 20,
    email: "frankc+testing@gmail.com",
    client: "Frank C.",
    role: "Admin",
    status: "Active",
    created: "July 12, 2024",
  },
  {
    id: 21,
    email: "tomr+testing@gmail.com",
    client: "Tom R.",
    role: "Client",
    status: "Registered",
    created: "July 11, 2024",
  },
  {
    id: 22,
    email: "jackl+testing@gmail.com",
    client: "Jack L.",
    role: "Owner",
    status: "Invited",
    created: "July 10, 2024",
  },
  {
    id: 23,
    email: "rachelz+testing@gmail.com",
    client: "Rachel Z.",
    role: "Admin",
    status: "Active",
    created: "July 9, 2024",
  },
  {
    id: 24,
    email: "stephenp+testing@gmail.com",
    client: "Stephen P.",
    role: "Client",
    status: "Registered",
    created: "July 8, 2024",
  },
  {
    id: 25,
    email: "susanq+testing@gmail.com",
    client: "Susan Q.",
    role: "Owner",
    status: "Invited",
    created: "July 7, 2024",
  },
  {
    id: 26,
    email: "danielt+testing@gmail.com",
    client: "Daniel T.",
    role: "Admin",
    status: "Active",
    created: "July 6, 2024",
  },
  {
    id: 27,
    email: "victorv+testing@gmail.com",
    client: "Victor V.",
    role: "Client",
    status: "Registered",
    created: "July 5, 2024",
  },
  {
    id: 28,
    email: "karenw+testing@gmail.com",
    client: "Karen W.",
    role: "Owner",
    status: "Invited",
    created: "July 4, 2024",
  },
  {
    id: 29,
    email: "georgec+testing@gmail.com",
    client: "George C.",
    role: "Admin",
    status: "Active",
    created: "July 3, 2024",
  },
  {
    id: 30,
    email: "amberm+testing@gmail.com",
    client: "Amber M.",
    role: "Client",
    status: "Registered",
    created: "July 2, 2024",
  },
  {
    id: 31,
    email: "andrewk+testing@gmail.com",
    client: "Andrew K.",
    role: "Owner",
    status: "Invited",
    created: "July 1, 2024",
  },
  {
    id: 32,
    email: "oliverj+testing@gmail.com",
    client: "Oliver J.",
    role: "Admin",
    status: "Active",
    created: "June 30, 2024",
  },
  {
    id: 33,
    email: "claireb+testing@gmail.com",
    client: "Claire B.",
    role: "Client",
    status: "Registered",
    created: "June 29, 2024",
  },
  {
    id: 34,
    email: "samuelh+testing@gmail.com",
    client: "Samuel H.",
    role: "Owner",
    status: "Invited",
    created: "June 28, 2024",
  },
  {
    id: 35,
    email: "lisam+testing@gmail.com",
    client: "Lisa M.",
    role: "Admin",
    status: "Active",
    created: "June 27, 2024",
  },
  {
    id: 36,
    email: "ryanc+testing@gmail.com",
    client: "Ryan C.",
    role: "Client",
    status: "Registered",
    created: "June 26, 2024",
  },
  {
    id: 37,
    email: "sophiad+testing@gmail.com",
    client: "Sophia D.",
    role: "Owner",
    status: "Invited",
    created: "June 25, 2024",
  },
  {
    id: 38,
    email: "nicholasr+testing@gmail.com",
    client: "Nicholas R.",
    role: "Admin",
    status: "Active",
    created: "June 24, 2024",
  },
  {
    id: 39,
    email: "gabriellew+testing@gmail.com",
    client: "Gabrielle W.",
    role: "Client",
    status: "Registered",
    created: "June 23, 2024",
  },
  {
    id: 40,
    email: "alexm+testing@gmail.com",
    client: "Alex M.",
    role: "Owner",
    status: "Invited",
    created: "June 22, 2024",
  },
];

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

  //   console.log("Search Query:", searchQuery);
  // console.log("Filtered Data:", filteredData);
  const handleModal = () => {
    setModal(!modal);
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
