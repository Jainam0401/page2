import React from 'react';
import { AiFillCheckCircle } from "react-icons/ai";
import { MdOutlineHorizontalRule } from "react-icons/md";
import { PiNumberCircleTwoFill } from "react-icons/pi";;
import { FaPlus } from "react-icons/fa";


const Form: React.FC = () => {
  // Brach Stuff
  return (
    <div className="h-full w-full p-4 rounded-md bg-white">
      <div className="flex items-center text-base ">
      <a href="#" className="inline-flex items-center text-black hover:text-rose-600 hover:underline">
        <div className="flex items-center p-4">
          <AiFillCheckCircle className="mr-2  text-rose-600 text-2xl" />
          <span className='text-sm md:text-base hover:text-rose-600'>Pick up Address</span>
        </div>
        <MdOutlineHorizontalRule className="ml-4" />
      </a>
      <a href="#" className="inline-flex items-center hover:text-rose-600 hover:underline ml-4">
        <div className="flex items-center">
          <PiNumberCircleTwoFill className="mr-2 text-rose-600 text-2xl" />
          <span className='text-sm md:text-base hover:text-rose-600'>Buyer Address</span>
          </div></a>
    </div>
      <div className="pt-4 border-[1px] p-3 border-black rounded-lg">
      <h3 className="font-bold my-2 text-xl text-center md:text-left">Buyer Details</h3>
        <div className="flex flex-col items-center gap-2 md:flex-row md:justify-between">
          <div className="w-[200px] md:min-w-[30%]">
            <p className="my-1 text-sm font-bold">Full Name</p>
            <input className="w-[100%] rounded-md border-[1px] border-slate-400 px-3" type="text" placeholder="Enter your full name" />
          </div>
          <div className="w-[200px] md:min-w-[30%]">
            <p className="my-1 text-sm font-bold">Email (Optional)</p>
            <input className="w-[100%] rounded-md border-[1px] border-slate-400 px-3" type="text" placeholder="Enter your email" />
          </div>
          <div className="w-[200px] md:min-w-[30%]">
            <p className="my-1 text-sm font-bold">Mobile No.</p>
            <input className="w-[100%] rounded-md border-[1px] border-slate-400 px-3" type="text" placeholder="Enter your mobile no." />
          </div>
        </div>
        <p className="mt-2 cursor-pointer text-center text-sm font-semibold">Add Alternative +</p>
        <p className="my-2 text-center text-xl font-bold md:text-left">Buyer Address Details:</p>
        <div>
          <div className="flex flex-col items-center pt-4 md:flex-row md:space-x-4">
            <div className="w-[50%] min-w-[200px] md:w-[100%]">
              <p className="font-bold">Pincode</p>
              <input className="my-2 w-[100%] rounded-md border-[1px] border-slate-400 px-3" type="text" placeholder="Enter pin" />
            </div>
            <div className="mt-3 w-[50%] min-w-[200px] md:mt-0 md:w-[100%]">
              <p className="font-bold">City</p>
              <input className="my-2 w-[100%] rounded-md border-[1px] border-slate-400 px-3" type="text" placeholder="Enter city name" />
            </div>
          </div>
          <div className="flex flex-col items-center pt-4 md:flex-row md:space-x-4">
            <div className="w-[50%] min-w-[200px] md:w-[100%]">
              <p className="font-bold">State</p>
              <input className="my-2 w-[100%] rounded-md border-[1px] border-slate-400 px-3" type="text" placeholder="Enter your state" />
            </div>
            <div className="mt-3 w-[50%] min-w-[200px] md:mt-0 md:w-[100%]">
              <p className="font-bold">Country</p>
              <input className="my-2 w-[100%] rounded-md border-[1px] border-slate-400 px-3" type="text" placeholder="Enter your country" />
            </div>
          </div>
          <div className="flex flex-col items-center pt-4 md:flex-row md:space-x-4">
            <div className="w-[50%] min-w-[200px] md:w-[100%]">
              <p className="font-bold">Complete Address</p>
              <textarea className="my-2 h-[80px] w-[100%] rounded-md border-[1px] border-slate-400 text-sm text-slate-400">
                House/Floor No., building name or street, locally
              </textarea>
            </div>
            <div className="w-[50%] min-w-[200px] md:w-[100%]">
              <p className="font-bold">Landmark (Optional)</p>
              <textarea className="my-2 h-[80px] w-[100%] rounded-md border-[1px] border-slate-400 text-sm text-slate-400">
                Any nearby post office, market, Hospital as the landmark
              </textarea>
            </div>
          </div>
          <div className="flex flex-col items-center pt-4 md:flex-row md:space-x-4">
            <div className="w-[50%] min-w-[200px] md:w-[100%]">
              <p className="font-bold">Date of Shipment</p>
              <input className="my-2 w-[100%] rounded-md border-[1px] border-slate-400 px-3" type="text" placeholder="Enter Date of Shipment" />
            </div>
            <div className="mt-3 w-[50%] min-w-[200px] md:mt-0 md:w-[100%]">
              <p className="font-bold">Others</p>
              <input className="my-2 w-[100%] rounded-md border-[1px] border-slate-400 px-3" type="text" placeholder="Others" />
            </div>
          </div>
          <div className="flex flex-col items-center pt-4 md:flex-row md:space-x-4">
            <div className="w-[50%] min-w-[200px] md:w-[100%]">
              <p className="font-bold">Buyer's Company Name (Optional)</p>
              <input className="my-2 w-[100%] rounded-md border-[1px] border-slate-400 px-3" type="text" placeholder="Company Name" />
            </div>
            <div className="mt-3 w-[50%] min-w-[200px] md:mt-0 md:w-[100%]">
              <p className="font-bold">Buyer's GSTIN (Optional)</p>
              <input className="my-2 w-[100%] rounded-md border-[1px] border-slate-400 px-3" type="text" placeholder="GSTIN No." />
            </div>
          </div>
        </div>
      </div>
      <div className="my-2 flex justify-center space-x-2 md:justify-start md:px-4">
        <input className="w-6 h-6" type="checkbox" name="shipping_address" id="shipping_address" />
        <label className='font-bold text-sm md:text-base' htmlFor="shipping_address">Add different shipping address</label>
      </div>
      <div className="my-2 flex justify-center space-x-2 md:justify-start md:px-4">
        <input className="w-6 h-6" type="checkbox" name="billing_address" id="billing_address" />
        <label className='font-bold text-sm md:text-base' htmlFor="billing_address">Add different billing address</label>
      </div>
      <div className="mt-5 flex flex-col items-center space-y-5 md:mt-0 md:flex-row md:space-x-5 md:space-y-0 md:p-4">
        <button className="w-[150px] border-[1px] border-red-400 py-2 text-red-400 md:ml-auto">Reset Changes</button>
        <button className="w-[150px] bg-red-400 py-2">Continue</button>
      </div>
    </div>
  );
};

export default Form;
