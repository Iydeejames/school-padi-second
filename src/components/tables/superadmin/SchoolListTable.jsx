import { useNavigate } from "react-router-dom";
import Table from "../../reusables/table/Table";
import PropTypes from "prop-types";
import { Pagination } from "../../reusables/filters";
import { useEffect, useState } from "react";
export default function SchoolListTable({ data }) {
  const navigate = useNavigate();
  const itemsPerPage = 4; // Number of items per page
  const [currentPage, setCurrentPage] = useState(1); // Current page
  const [filteredData, setFilteredData] = useState([]); // Data to display on the current page

  // Function to update the displayed data based on the current page
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Update the filtered data whenever the current page or data changes
  useEffect(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    setFilteredData(data.slice(start, end));
  }, [currentPage, data]);
  const broadcast_column = [
    {
      title: "School",
      key: "school",
      render: (data) => (
        <p className="flex   gap-2">
          {" "}
          <img className="" src="/person.svg" /> {data.school}
        </p>
      ),
    },
    {
      title: "School Number",
      key: "school_number",
      render: (data) => (
        <span className="min-w-[10rem]">{data.school_number}</span>
      ),
    },
    {
      title: "Signup Date ",
      key: "signup_date",
      render: (data) => (
        <span className="min-w-[10rem]">
          {data.signup_date ?? "Not Available"}
        </span>
      ),
    },
    {
      title: "Expiration Date",
      key: "expiration_date",
      render: (data) => <span>{data.expiration_date ?? "Not Available"}</span>,
    },
    {
      title: "Categories",
      key: "categories",
      render: (data) => (
        <div className="flex space-x-1">
          {data.categories.split(", ").map((category, index) => (
            <span
              key={index}
              className={` ${
                index === 0 && "-ml-4"
              } - bg-[#E6F2FF] text-black p-1 h-6 w-6 flex items-center justify-center rounded-full`}
            >
              {/* {index} */}
              {category.charAt(0)}
            </span>
          ))}
        </div>
      ),
    },
    {
      title: "",
      key: " ",
      render: (data) => (
        <div className="flex items-center gap-x-4">
          <img
            className="w-6 h-6 cursor-pointer"
            src="/info-circle.svg"
            alt="info"
            onClick={() => navigate(`/s/user-management/${data.id}`)}
          />
          <img
            className="w-6 h-6 cursor-pointer"
            src="/edit.svg"
            alt="edit"
            onClick={() => navigate(`/s/user-management/${data.id}`)}
          />
          <img
            className="w-6 h-6 object-cover cursor-pointer"
            src="/lock.svg"
            alt="lock"
            onClick={() => navigate(`/s/user-management/${data.id}`)}
          />
          <img
            className="w-6 h-6 cursor-pointer"
            src="/delete.svg"
            alt="delete"
            onClick={() => navigate(`/delete/${data.id}`)}
          />
        </div>
      ),
    },
  ];

  return (
    <div className="rounded border text-[#8E959C]">
      <Table columns={broadcast_column ?? []} data={filteredData ?? []} />
      <Pagination
        currentPage={currentPage}
        totalItems={data.length}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
      />{" "}
    </div>
  );
}

SchoolListTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};
