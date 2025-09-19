import React from 'react';

const TopContactBar = () => {
  return (
    <div className="bg-gray-50 py-2 px-4 hidden md:block border-b border-gray-100">
      <div className="container mx-auto">
        <div className="flex justify-end items-center text-sm">
          {/* Top contact bar intentionally left minimal per request - social links removed */}
        </div>
      </div>
    </div>
  );
};

export default TopContactBar;