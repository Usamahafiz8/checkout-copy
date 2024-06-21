import React from 'react';

const SavedSearches = () => {
  return (
    <div className="mt-4">
      <div className="text-gray-600 flex items-center space-x-2">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
        </svg>
        <span>Saved searches</span>
      </div>
      <button
        className="mt-2 py-2 px-4 text-gray-400 border border-gray-300 rounded-lg cursor-not-allowed"
        disabled
      >
        Save search
      </button>
    </div>
  );
};

export default SavedSearches;
