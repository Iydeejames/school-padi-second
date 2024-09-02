import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaPlus } from "react-icons/fa";

const Pagination = ({ totalItems, itemsPerPage, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
      onPageChange(currentPage + 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
    onPageChange(pageNumber);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 3;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      let startPage = Math.max(currentPage - 1, 1);
      let endPage = Math.min(currentPage + 1, totalPages);

      if (startPage > 1) pageNumbers.push(1);
      if (startPage > 2) pageNumbers.push('...');
      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }
      if (endPage < totalPages - 1) pageNumbers.push('...');
      if (endPage < totalPages) pageNumbers.push(totalPages);
    }

    return pageNumbers.map((pageNumber, index) => (
      <button
        key={index}
        className={`px-3 py-1 rounded border ${pageNumber === currentPage ? 'border-blue-500' : 'border-gray-300'}`}
        onClick={() => typeof pageNumber === 'number' && handlePageClick(pageNumber)}
        disabled={typeof pageNumber !== 'number'}
      >
        {pageNumber}
      </button>
    ));
  };

  return (
    <div className="flex items-center justify-between border-t-2 p-2 m-4 space-x-2">
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className="px-4 py-2 flex items-center gap-x-4 border rounded-l border-gray-300 "
      >
       <FaPlus />  <span>Previous </span> 
      </button>
      <div className="flex gap-x-3">

      {renderPageNumbers()}
      </div>
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="px-4 py-2 flex items-center gap-x-4 border rounded-r border-gray-300 "
      >
      <span>Next </span>   <FaPlus />
      </button>
    </div>
  );
};

Pagination.propTypes = {
  totalItems: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
