import React from 'react';

const BorderBottomComponent: React.FC = () => {
  return (
    <div className="relative z-10 mx-auto ml-40">
      {/* Container */}
      <div className="p-4">
        {/* Content goes here */}
        <h2 className="text-2xl font-bold mb-4">My Component</h2>

      </div>

      {/* Border-bottom */}
      <div className="border-b border-gray-300">
        {/* Text elements on the border */}
        <div className="flex font-bold text-slate-500  px-4 py-2">
          <span className=" ">Shipping details</span>
          <span className=" ml-10">Order details</span>
          <span className=" ml-10 ">Select Courier</span>
        </div>
      </div>
    </div>
  );
};

export default BorderBottomComponent;