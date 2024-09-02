import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Table from "../../reusables/table/Table";
import Pagination from "../../reusables/filters/Pagination"; // Ensure this import is correct
import { IoIosChatbubbles } from "react-icons/io";
import { IoMail } from "react-icons/io5";

export default function StudentsListTable({ data, selectedRows, onRowSelection }) {
  const navigate = useNavigate();
  const itemsPerPage = 4; // Number of items per page
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
      const currentIds = filteredData.map(item => item.id);
      onRowSelection(currentIds);
      setAllSelected(true);
    }
  };

  // Update the filtered data whenever the current page or data changes
  useEffect(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    setFilteredData(data?.slice(start, end));
  }, [currentPage, data]);

  const student_column = [
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
      title: "Student",
      key: "student",
      render: (data) => (
        <p className="flex min-w-32 gap-x-4 gap-2">
          <img className="" src="/person.svg" alt="student avatar" /> {data.student}
        </p>
      ),
    },
    {
      title: "Section",
      key: "section",
      render: (data) => <p className="min-w-[5rem]">{data.section}</p>,
    },
    {
      title: "Class ",
      key: "class",
      render: (data) => (
        <p className="min-w-[7rem] flex items-center gap-x-2">
          {data.class ?? "Not Available"}
        </p>
      ),
    },
    {
      title: "ID",
      key: "id",
      render: (data) => <span>{data.id ?? "Not Available"}</span>,
    },
    {
      title: "Email",
      key: "email",
      render: (data) => <span>{data.email ?? "Not Available"}</span>,
    },
    {
      title: "Contact ",
      key: "contact",
      render: (data) => <span>{data.contact ?? "Not Available"}</span>,
    },
    {
      title: "",
      key: "actions ",
      render: (data) => (
        <div className="flex text-[#8E959C] text-xl items-center gap-x-4">
          <img
            className="w-6 h-6 cursor-pointer"
            src="/info-circle.svg"
            alt="info"
            onClick={() => navigate(`/t/information-system/student/${data.id}`)}
          />
          <IoMail size={20} />
          <IoIosChatbubbles size={20} />
        </div>
      ),
    },
  ];

  return (
    <div className="rounded border text-[#8E959C]">
      <Table columns={student_column ?? []} data={filteredData ?? []} />
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(data?.length / itemsPerPage)}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

StudentsListTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedRows: PropTypes.arrayOf(PropTypes.string).isRequired,
  onRowSelection: PropTypes.func.isRequired,
};
