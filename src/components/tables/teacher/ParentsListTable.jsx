import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Table from "../../reusables/table/Table";
import Pagination from "../../reusables/filters/Pagination"; // Using your provided Pagination component
import { IoMail } from "react-icons/io5";
import { IoIosChatbubbles } from "react-icons/io";
import { parentData } from "../../../utils/constants/_data";

export default function ParentsListTable({ selectedRows, onRowSelection }) {
  const itemsPerPage = 3; // Number of items per page
  const [currentPage, setCurrentPage] = useState(1); // Current page
  const [filteredData, setFilteredData] = useState([]); // Data to display on the current page
  const [allSelected, setAllSelected] = useState(false); // Track select all status

  // Function to update the displayed data based on the current page
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Handle individual row selection
  const handleRowCheck = (id) => {
    let newSelectedRows = [];
    if (selectedRows.includes(id)) {
      newSelectedRows = selectedRows.filter((rowId) => rowId !== id);
    } else {
      newSelectedRows = [...selectedRows, id];
    }
    onRowSelection(newSelectedRows);
    setAllSelected(newSelectedRows.length === filteredData.length);
  };

  // Handle select all rows on the current page
  const handleSelectAll = () => {
    if (allSelected) {
      onRowSelection([]);
      setAllSelected(false);
    } else {
      const currentIds = filteredData.map((item) => item.id);
      onRowSelection(currentIds);
      setAllSelected(true);
    }
  };

  // Update the filtered data whenever the current page or data changes
  useEffect(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    setFilteredData(parentData?.slice(start, end));
    setAllSelected(false); // Reset the "select all" checkbox when the page changes
  }, [currentPage]);

  const parents_column = [
    {
      title: (
        <input
          type="checkbox"
          checked={allSelected}
          onChange={handleSelectAll}
        />
      ),
      key: "check",
      render: (data) => (
        <input
          type="checkbox"
          checked={selectedRows.includes(data.id)}
          onChange={() => handleRowCheck(data.id)}
        />
      ),
    },
    {
      title: "Parents",
      key: "parents",
      render: (data) => (
        <div className="flex min-w-80 flex-col text-sm">
          <span>Father&apos;s Name: {data.fatherName}</span>
          <span>Mother&apos;s Name: {data.motherName}</span>
          <span>Username: {data.username}</span>
          <span>{data.date}</span>
        </div>
      ),
    },
    {
      title: "Parent's Email",
      key: "email",
      render: (data) => <span className="min-w-[5rem]">{data.email}</span>,
    },
    {
      title: "Parent's Contact",
      key: "contact",
      render: (data) => (
        <span className="min-w-[5rem] flex items-center gap-x-2">
          {data.contact ?? "Not Available"}
        </span>
      ),
    },
    {
      title: "Status",
      key: "status",
      render: (data) => (
        <span
          className={`px-2 py-1 rounded-full text-xs ${
            data.status === "Active"
              ? "bg-green-100 text-green-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {data.status ?? "Not Available"}
        </span>
      ),
    },
    {
      title: "Invited",
      key: "invited",
      render: (data) => <span>{data.invited ?? "Not Available"}</span>,
    },
    {
      title: "Parents",
      key: "childName",
      render: (data) => (
        <span className="text-blue-600 cursor-pointer">{data.childName ?? "Not Available"}</span>
      ),
    },
    {
      title: "",
      key: "actions",
      render: () => (
        <div className="flex items-center text-xl gap-x-4">
          <IoMail className="cursor-pointer" />
          <IoIosChatbubbles className="cursor-pointer" />
        </div>
      ),
    },
  ];

  return (
    <div className=" border p-4 rounded-xl text-[#8E959C]">
      <Table columns={parents_column ?? []} data={filteredData ?? []} case={"sentence"} />
      <Pagination
        totalItems={parentData.length}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

ParentsListTable.propTypes = {
  selectedRows: PropTypes.arrayOf(PropTypes.string).isRequired,
  onRowSelection: PropTypes.func.isRequired,
};
