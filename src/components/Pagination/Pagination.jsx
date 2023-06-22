import React from 'react';
import './Pagination.css';

const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const renderPaginationButtons = () => {
    const buttons = [];

    for (let i = 0; i < totalPages; i++) {
      buttons.push(
        <li key={i} className="pagination__item">
          <button
            className={`pagination__button ${currentPage === i ? 'pagination__button--active' : ''}`}
            onClick={() => setCurrentPage(i)}
            disabled={currentPage === i}
          >
            {i + 1}
          </button>
        </li>
      );
    }

    return buttons;
  };

  return (
    <ul className="pagination">
      <li className="pagination__item">
        <button
          className="pagination__button"
          onClick={handlePreviousPage}
          disabled={currentPage === 0}
        >
          &lt;
        </button>
      </li>

      {renderPaginationButtons()}

      <li className="pagination__item">
        <button
          className="pagination__button"
          onClick={handleNextPage}
          disabled={currentPage === totalPages - 1}
        >
          &gt;
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
