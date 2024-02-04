import React from 'react';

type PropsType = {
  currentPage: number;
  totalPages: number;
  onPageChange: (newPage: number) => void;
};

const Pagination = ({ currentPage, totalPages, onPageChange }:PropsType) => {
  return (
    <div  className='flex justify-end p-4'>
      {Array.from({ length: totalPages }, (_, index) => (

        <button 
          key={index + 1}
          onClick={() => onPageChange(index + 1)}
          className={`border-2 px-2 m-1 hover:bg-[#F9A76C] hover:border-none hover:text-white focus:bg-[#F9A76C] focus:text-white  ${currentPage === index + 1 ? 'active' : ''}`}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;