import React from 'react';

const BorderBottomComponent = () => {
  return (
      <div className="border-b border-dotted flex justify-center md:justify-start font-bold text-slate-500 mb-4  border-gray-300 m-auto">
          <span className="mr-4 font-bold text-black cursor-pointer border-b-2 hover:border-red-600">Shipping Details</span>
          <span className="mr-4 font-bold text-black cursor-pointer border-b-2 hover:border-red-600">Order Details</span>
          <span className='font-bold text-black cursor-pointer border-b-2 hover:border-red-600'>Select Courier</span>
        </div>
   
    
  );
};

export default BorderBottomComponent;