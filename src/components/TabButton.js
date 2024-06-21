import React from 'react';

const TabButton = ({ isActive, children }) => {
  return (
    <button
      className={`py-2 px-4 border-b-2 ${
        isActive ? 'border-blue-500 text-blue-500' : 'border-transparent text-gray-500 hover:text-blue-500'
      }`}
    >
      {children}
    </button>
  );
};

export default TabButton;
