'use client'
import React, { useState } from "react";
import Formbar from "./Formbar";
import { Label, Textarea, Checkbox } from "flowbite-react";

function Form() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    pincode: "",
    state: "",
    address: "",
    date: "",
    country: "",
    cityName: "",
    landmark: "",
    others: "",
    gstin: "",
    shippingAddress: false,
    billingAddress: false,
  });

  const handleInputChange = (e:any) => {
    const { id, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [id]: newValue });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log(formData); // You can replace this with your desired action (e.g., sending data to a server)
    // Convert formData to JSON
    const jsonData = JSON.stringify(formData, null, 2);
    console.log(jsonData);
  };

  return (
    
      <form onSubmit={handleSubmit}>
      <div className="bg-white p-2 rounded-lg">
      <Formbar />
      <div className="border-2 py-2 border-black rounded-md px-4">
        <div className="">
          <p className="py-2 font-bold text-gray-700">Buyer Details</p>
          <div className="grid grid-cols-1  py-2 gap-4 md:grid-cols-3">
            <div>
              <label htmlFor="full-name" className="block mb-2 text-sm font-medium text-gray-500">
                Full Name
              </label>
              <input
                type="text"
                value={formData.fullName}
                  onChange={handleInputChange}
              
                id="fullName"
                 
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-500">
                Email (Optional)
              </label>
              <input
               value={formData.email}
               onChange={handleInputChange}
                type="email"
                id="email"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="number" className="block mb-2 text-sm font-medium text-gray-500">
                Mobile number
              </label>
              <input
               value={formData.mobileNumber}
               onChange={handleInputChange}
                type="number"
                id="number"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Enter your mobile number"
              />
            </div>
          </div>
        </div>
        
          <p className="py-2 font-bold text-gray-700">Buyer Address Details</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <div>
                <label htmlFor="pincode" className="block mb-2 text-sm font-medium text-gray-500">
                  Pin Code
                </label>
                <input
                  type="number"
                  id="pincode"
                  value={formData.pincode}
                  onChange={handleInputChange}
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Enter your Pin Code"
                />
              </div>
              <div>
                <label htmlFor="state" className="block mb-2 text-sm font-medium text-gray-500">
                  State
                </label>
                <input
                  type="text"
                  id="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Enter your State"
                />
              </div>
              <div>
                <Label htmlFor="address" value="Complete address" />
                <Textarea
                  id="address"
                  placeholder="Leave a comment..."
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  rows={4}
                />
              </div>
              <div>
                <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-500">
                  Date of
                </label>
                <input
                  type="text"
                  id="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Enter your Date of"
                />
              </div>
              <div>
                <label htmlFor="country" className="block mb-2 text-sm font-medium text-gray-500">
                  Country
                </label>
                <input
                  type="text"
                  id="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Enter your Country"
                />
              </div>
            </div>
            <div>
              <div>
                <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-500">
                  City Name
                </label>
                <input
                  type="text"
                  id="city"
                  value={formData.cityName}
                  onChange={handleInputChange}
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Enter your City Name"
                />
              </div>
              <div>
                <label htmlFor="state" className="block mb-2 text-sm font-medium text-gray-500">
                  State
                </label>
                <input
                  type="text"
                  id="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Enter your State"
                />
              </div>
              <div>
                <Label htmlFor="landmark" value="LandMark (optional)" />
                <Textarea
                  id="landmark"
                  placeholder="Enter the landmark..."
                  required
                  rows={4}
                  value={formData.landmark}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="others" className="block mb-2 text-sm font-medium text-gray-500">
                  Others
                </label>
                <input
                  type="text"
                  id="others"
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder=" Others"
                  value={formData.others}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="gstin" className="block mb-2 text-sm font-medium text-gray-500">
                  Buyer's GSTIN
                </label>
                <input
                  type="text"
                  id="gstin"
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder=" Buyer's GSTIN"
                  value={formData.gstin}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
        
      </div>
      <div className="flex ml-3 mt-2 items-center gap-2">
        <Checkbox id="shipping-address" />
        <Label htmlFor="shipping-address">Add different Shipping address</Label>
      </div>
      <div className="flex ml-3 mt-2 items-center gap-2">
        <Checkbox id="billing-address" />
        <Label htmlFor="billing-address">Add different Billing address</Label>
      </div>
      <div className=" flex flex-col items-center space-y-5 md:flex-row md:space-x-5 md:space-y-0 md:p-4">
        <button className="w-[150px] border-[1px] border-red-400 py-2 text-red-400 md:ml-auto">Reset Changes</button>
        <button type="submit" className="w-[150px]  bg-red-400 py-2">Continue</button>
      </div>
    </div>
      </form>

  );
}

export default Form;
