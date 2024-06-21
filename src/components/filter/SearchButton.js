import React from 'react';

const SearchButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-purple-300 hover:bg-purple-400 text-white font-semibold py-2 px-4 rounded-lg shadow-md flex items-center justify-center"
    >
      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m1.9-4.15A7.5 7.5 0 1115 3.6a7.5 7.5 0 013.5 13.25L21 21z"></path>
      </svg>
      Search
    </button>
  );
};

export default SearchButton;
