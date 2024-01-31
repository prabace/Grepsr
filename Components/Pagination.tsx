import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div  className='flex justify-end p-4'>
      {Array.from({ length: totalPages }, (_, index) => (

        <button 
          key={index + 1}
          onClick={() => onPageChange(index + 1)}
          className={`border-2 px-2 m-1 ${currentPage === index + 1 ? 'active' : ''}`}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;