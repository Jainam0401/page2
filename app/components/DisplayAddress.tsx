import React from 'react'
import { CiSearch } from "react-icons/ci";        
import { IoIosAdd } from "react-icons/io";
import AddressComp from './AddressComp';


function DisplayAddress() {
  let data = [
    {
      name: 'Sam Sulek',
      city: 'Mumbai',
      address: '2/5 golden building,athlete road near golden gym thane (W) Pincode 4000601'
    },
    {
      name: 'Sam Sulek',
      city: 'Mumbai',
      address: '2/5 golden building,athlete road near golden gym thane (W) Pincode 4000601'
    },
    {
      name: 'Sam Sulek',
      city: 'Mumbai',
      address: '2/5 golden building,athlete road near golden gym thane (W) Pincode 4000601'
    },
    {
      name: 'Sam Sulek',
      city: 'Mumbai',
      address: '2/5 golden building,athlete road near golden gym thane (W) Pincode 4000601'
    },
    {
      name: 'Sam Sulek',
      city: 'Mumbai',
      address: '2/5 golden building,athlete road near golden gym thane (W) Pincode 4000601'
    },
    {
      name: 'Sam Sulek',
      city: 'Mumbai',
      address: '2/5 golden building,athlete road near golden gym thane (W) Pincode 4000601'
    },
    {
      name: 'Sam Sulek',
      city: 'Mumbai',
      address: '2/5 golden building,athlete road near golden gym thane (W) Pincode 4000601'
    },
    {
      name: 'Sam Sulek',
      city: 'Mumbai',
      address: '2/5 golden building,athlete road near golden gym thane (W) Pincode 4000601'
    },
    {
      name: 'Sam Sulek',
      city: 'Mumbai',
      address: '2/5 golden building,athlete road near golden gym thane (W) Pincode 4000601'
    },
    {
      name: 'Sam Sulek',
      city: 'Mumbai',
      address: '2/5 golden building,athlete road near golden gym thane (W) Pincode 4000601'
    },
    {
      name: 'Sam Sulek',
      city: 'Mumbai',
      address: '2/5 golden building,athlete road near golden gym thane (W) Pincode 4000601'
    },
    {
      name: 'Sam Sulek',
      city: 'Mumbai',
      address: '2/5 golden building,athlete road near golden gym thane (W) Pincode 4000601'
    },
    {
      name: 'Sam Sulek',
      city: 'Mumbai',
      address: '2/5 golden building,athlete road near golden gym thane (W) Pincode 4000601'
    },
    {
      name: 'Sam Sulek',
      city: 'Mumbai',
      address: '2/5 golden building,athlete road near golden gym thane (W) Pincode 4000601'
    }
  ]
  return (
    <div className='p-4 max-h-screen overflow-y-auto'>
      <div className='relative'>
        <CiSearch className='absolute text-xl top-[3px] left-[5px]'/>
        <input className='pl-8 p-[2px]  md:max-w-[200px] rounded-md text-sm border-2 border-slate-300' type='text' placeholder='Search Address' />
      </div>
        {/* <div className='grid grid-cols-4 p-4  border-b-2 border-dotted'>
          <div className='col-span-3'>
            <span className='text-sm font-bold mr-2'>{data[0].name}</span>
            <span className='text-sm font-bold'>{data[0].city}</span>
            <p className='text-sm'>{data[0].address}</p>
          </div>
          <div className='col-span-1 '>
            <button className='flex items-center text-red-500 text-sm font-medium '>
              <IoIosAdd className='text-red-500' />
                <p className='text-sm'>Add</p>
            </button>
          </div>
        </div> */}
        {data.map((items,index) => (
          <AddressComp 
          key={index}
          {...items}
          />
        ))}
    </div>
  )
}

export default DisplayAddress