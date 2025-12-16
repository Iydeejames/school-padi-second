    import { useNavigate } from "react-router-dom";
import Table from "../../reusables/table/Table";
import PropTypes from "prop-types";
import Pagination from "../../reusables/filters/Pagination";
import { useEffect, useState } from "react";


export default function FinanceTable({ data }) {
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
      title: "",
      key: "invoice_id",
      render: () => (
        <p className="flex  gap-x-12 gap-2">
          {" "}
          <input type="checkbox" />
        </p>
      ),
    },
    {
      title: "Invoice ID",
      key: "invoice_id",
      render: (data) => (
        <p className="flex  gap-x-12 gap-2">
          {" "}
           {data.id}
        </p>
      ),
    },
    {
      title: "Fee Title",
      key: "fee_title",
      render: (data) => (
        <span className="min-w-[10rem]">{data.fee_title}</span>
      ),
    },
    {
      title: "Payer ",
      key: "payer",
      render: (data) => (
        <span className="min-w-[10rem] flex items-center gap-x-2">
    <img className="" src="/person.svg" />      {data.payer ?? "Not Available"}
        </span>
      ),
    },
    {
      title: "Trans ID/Cheque No",
      key: "trans_id",
      render: (data) => <span>{data.trans_id ?? "Not Available"}</span>,
    },
    {
      title: "Method",
      key: "method",
      render: (data) => <span>{data.method ?? "Not Available"}</span>,
    },
    {
      title: "Payment Date",
      key: "payment_date",
      render: (data) => <span>{data.payment_date ?? "Not Available"}</span>,
    },
    {
      title: "Payment Status",
      key: "payment_status",
      render: (data) => <span style={{color:"#0F973D"}} className="text-green">{data.payment_status ?? "Not Available"}</span>,
    },
    {
      title: "Amount",
      key: "amount",
      render: (data) => <span>{data.amount ?? "Not Available"}</span>,
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
        </div>
      ),
    },
  ];


  return (
    <div className="rounded border text-[#8E959C]">
      <Table
        columns={broadcast_column ?? []}
        data={filteredData ?? []}
      />
<Pagination
        currentPage={currentPage}
        totalItems={data.length}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
      />    </div>
  );
}

FinanceTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};
