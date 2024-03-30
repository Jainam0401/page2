"use client";
import React, { useState } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { MdOutlineHorizontalRule } from "react-icons/md";
import { PiNumberCircleTwoFill } from "react-icons/pi";
import axios from "axios";

const Form: React.FC = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    pincode: "",
    city: "",
    state: "",
    country: "",
    completeAddress: "",
    landmark: "",
    dateOfShipment: "",
    others: "",
    buyersCompanyName: "",
    buyersGSTIN: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    console.log(typeof value);
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post("../api/Form", formData);
      alert("Data inserted successfully!");
      setFormData({
        fullname: "",
        email: "",
        phoneNumber: "",
        pincode: "",
        city: "",
        state: "",
        country: "",
        completeAddress: "",
        landmark: "",
        dateOfShipment: "",
        others: "",
        buyersCompanyName: "",
        buyersGSTIN: "",
      });
    } catch (error) {
      console.log("Error submitting form: ", error);
      alert("An error occured. Please try again later.");
    }
  };

  return (
    <div className="h-full w-full p-4 rounded-md bg-white">
      <form onSubmit={handleSubmit}>
        <div className="flex items-center text-base ">
          <a
            href="#"
            className="inline-flex items-center text-black hover:text-rose-600 hover:underline"
          >
            <div className="flex items-center p-4">
              <AiFillCheckCircle className="mr-2  text-rose-600 text-2xl" />
              <span className="text-sm md:text-base hover:text-rose-600">
                Pick up Address
              </span>
            </div>
            <MdOutlineHorizontalRule className="ml-4" />
          </a>
          <a
            href="#"
            className="inline-flex items-center hover:text-rose-600 hover:underline ml-4"
          >
            <div className="flex items-center">
              <PiNumberCircleTwoFill className="mr-2 text-rose-600 text-2xl" />
              <span className="text-sm md:text-base hover:text-rose-600">
                Buyer Address
              </span>
            </div>
          </a>
        </div>
        <div className="pt-4 border-[1px] p-3 border-black rounded-lg">
          <h3 className="font-bold my-2 text-xl text-center md:text-left">
            Buyer Details
          </h3>
          <div className="flex flex-col items-center gap-2 md:flex-row md:justify-between">
            <div className="w-[200px] md:min-w-[30%]">
              <p className="my-1 text-sm font-bold">Full Name</p>
              <input
                className="w-[100%] rounded-md border-[1px] border-slate-400 px-3"
                type="text"
                name="fullname"
                placeholder="Enter your full name"
                value={formData.fullname}
                onChange={handleChange}
              />
            </div>
            <div className="w-[200px] md:min-w-[30%]">
              <p className="my-1 text-sm font-bold">Email (Optional)</p>
              <input
                className="w-[100%] rounded-md border-[1px] border-slate-400 px-3"
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="w-[200px] md:min-w-[30%]">
              <p className="my-1 text-sm font-bold">Mobile No.</p>
              <input
                className="w-[100%] rounded-md border-[1px] border-slate-400 px-3"
                type="number"
                name="phonenumber"
                placeholder="Enter your mobile no."
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>
          </div>
          <p className="mt-2 cursor-pointer text-center text-sm font-semibold">
            Add Alternative +
          </p>
          <p className="my-2 text-center text-xl font-bold md:text-left">
            Buyer Address Details:
          </p>
          <div>
            <div className="flex flex-col items-center pt-4 md:flex-row md:space-x-4">
              <div className="w-[50%] min-w-[200px] md:w-[100%]">
                <p className="font-bold">Pincode</p>
                <input
                  className="my-2 w-[100%] rounded-md border-[1px] border-slate-400 px-3"
                  type="number"
                  name="pincode"
                  placeholder="Enter pin"
                  value={formData.pincode}
                  onChange={handleChange}
                />
              </div>
              <div className="mt-3 w-[50%] min-w-[200px] md:mt-0 md:w-[100%]">
                <p className="font-bold">City</p>
                <input
                  className="my-2 w-[100%] rounded-md border-[1px] border-slate-400 px-3"
                  type="text"
                  name="city"
                  placeholder="Enter city name"
                  value={formData.city}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex flex-col items-center pt-4 md:flex-row md:space-x-4">
              <div className="w-[50%] min-w-[200px] md:w-[100%]">
                <p className="font-bold">State</p>
                <input
                  className="my-2 w-[100%] rounded-md border-[1px] border-slate-400 px-3"
                  type="text"
                  name="state"
                  placeholder="Enter your state"
                  value={formData.state}
                  onChange={handleChange}
                />
              </div>
              <div className="mt-3 w-[50%] min-w-[200px] md:mt-0 md:w-[100%]">
                <p className="font-bold">Country</p>
                <input
                  className="my-2 w-[100%] rounded-md border-[1px] border-slate-400 px-3"
                  type="text"
                  name="country"
                  placeholder="Enter your country"
                  value={formData.country}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex flex-col items-center pt-4 md:flex-row md:space-x-4">
              <div className="w-[50%] min-w-[200px] md:w-[100%]">
                <p className="font-bold">Complete Address</p>
                <textarea
                  className="my-2 h-[80px] w-[100%] rounded-md border-[1px] border-slate-400 text-sm text-slate-400"
                  name="completeAddress"
                  value={formData.completeAddress}
                  onChange={handleChange}
                >
                  House/Floor No., building name or street, locally
                </textarea>
              </div>
              <div className="w-[50%] min-w-[200px] md:w-[100%]">
                <p className="font-bold">Landmark (Optional)</p>
                <textarea
                  className="my-2 h-[80px] w-[100%] rounded-md border-[1px] border-slate-400 text-sm text-slate-400"
                  name="landmark"
                  value={formData.landmark}
                  onChange={handleChange}
                >
                  Any nearby post office, market, Hospital as the landmark
                </textarea>
              </div>
            </div>
            <div className="flex flex-col items-center pt-4 md:flex-row md:space-x-4">
              <div className="w-[50%] min-w-[200px] md:w-[100%]">
                <p className="font-bold">Date of Shipment</p>
                <input
                  className="my-2 w-[100%] rounded-md border-[1px] border-slate-400 px-3"
                  type="date"
                  name="dateOfShipment"
                  placeholder="Enter Date of Shipment"
                  value={formData.dateOfShipment}
                  onChange={handleChange}
                />
              </div>
              <div className="mt-3 w-[50%] min-w-[200px] md:mt-0 md:w-[100%]">
                <p className="font-bold">Others</p>
                <input
                  className="my-2 w-[100%] rounded-md border-[1px] border-slate-400 px-3"
                  type="text"
                  name="others"
                  placeholder="Others"
                  value={formData.others}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex flex-col items-center pt-4 md:flex-row md:space-x-4">
              <div className="w-[50%] min-w-[200px] md:w-[100%]">
                <p className="font-bold">Buyers Company Name (Optional)</p>
                <input
                  className="my-2 w-[100%] rounded-md border-[1px] border-slate-400 px-3"
                  type="text"
                  name="buyersCompanyName"
                  placeholder="Company Name"
                  value={formData.buyersCompanyName}
                  onChange={handleChange}
                />
              </div>
              <div className="mt-3 w-[50%] min-w-[200px] md:mt-0 md:w-[100%]">
                <p className="font-bold">Buyers GSTIN (Optional)</p>
                <input
                  className="my-2 w-[100%] rounded-md border-[1px] border-slate-400 px-3"
                  type="number"
                  name="buyersGSTIN"
                  placeholder="GSTIN No."
                  value={formData.buyersGSTIN}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="my-2 flex justify-center space-x-2 md:justify-start md:px-4">
          <input
            className="w-6 h-6"
            type="checkbox"
            name="shipping_address"
            id="shipping_address"
          />
          <label
            className="font-bold text-sm md:text-base"
            htmlFor="shipping_address"
          >
            Add different shipping address
          </label>
        </div>
        <div className="my-2 flex justify-center space-x-2 md:justify-start md:px-4">
          <input
            className="w-6 h-6"
            type="checkbox"
            name="billing_address"
            id="billing_address"
          />
          <label
            className="font-bold text-sm md:text-base"
            htmlFor="billing_address"
          >
            Add different billing address
          </label>
        </div>
        <div className="mt-5 flex flex-col items-center space-y-5 md:mt-0 md:flex-row md:space-x-5 md:space-y-0 md:p-4">
          <button className="w-[150px] border-[1px] border-red-400 py-2 text-red-400 md:ml-auto">
            Reset Changes
          </button>
          <button className="w-[150px] bg-red-400 py-2" type="submit">
            Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
