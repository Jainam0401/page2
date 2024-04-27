import React from 'react';
import { CiSearch } from "react-icons/ci";        
import { IoIosAdd } from "react-icons/io";

function AddressComp({fullName, city, address} : any) {
 const handleclick = () => {
    console.log("clicked");
 }

 return (
    <div className='grid grid-cols-4 py-2 border-b-2 border-dotted'>
      <div className='col-span-3'>
        <span className='text-sm font-bold mr-2'>{fullName}</span>
        <span className='text-sm font-bold'>{city}</span>
        <p className='text-sm'>{address}</p>
      </div>
      <div className='col-span-1 '>
        <button onClick={handleclick} className='flex items-center text-red-500 text-sm font-medium '>
          <IoIosAdd className='text-red-500' />
          <p className='text-sm'>Add</p>
        </button>
      </div>
    </div>
 );
}

export default AddressComp;
