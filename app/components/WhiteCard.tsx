import React from 'react';
import { IoMdCall } from "react-icons/io";

const tabledata = [
  {
    "Courier Partner": "Delhivery Air",
    "Rating": 4.75,
    "Expected Pickup": "Forecasted",
    "Estimated Delivery": "Mar 12, 2014",
    "Chargeable Weight": "1 Kg",
    "Charges": "$151.21"
  },
  {
    "Courier Partner": "Ecom Premium and RDS Surface",
    "Rating": 4.75,
    "Expected Pickup": "Today till 9PM",
    "Estimated Delivery": "",
    "Available Services": ["Cash on delivery", "Request Free Tracking"],
    "Chargeable Weight": "1 Kg",
    "Charges": "$103.01"
  },
  {
    "Courier Partner": "Blart Logistics Service",
    "Rating": 4.75,
    "Expected Pickup": "Tomorrow till noon",
    "Estimated Delivery": "Mar 13, 2014",
    "Available Services": ["Cash on delivery", "Request Free Tracking"],
    "Chargeable Weight": "1 Kg",
    "Charges": "$103.01"
  },
  {
    "Courier Partner": "DTDC Air 500gm",
    "Rating": 4.75,
    "Expected Pickup": "Tomorrow till noon",
    "Available Services": ["Cash on delivery", "Request Free Tracking"],
    "Chargeable Weight": "1 Kg",
    "Charges": "$103.01"
  }
  // ...rest of the data
];

export default function WhiteCard() {
  return (
    <div style={{ backgroundColor: "white" }}>
      <div className="table1 mt-3 ml-40 bg-white">
        <div className="dropdownitem bg-white p-y-8">
          <div className="float-right">
            <select>
              <option value="volvo">Last 30 Days</option>
              <option value="saab">Last week</option>
              <option value="mercedes">Last 6 Moths</option>
              <option value="audi">One Year</option>
            </select>
          </div>
        </div>

        <div className="bg-white relative overflow-x-auto mt-15 w-full">
        <table className="bg-white w-full text-sm text-left">
  <thead className="text-xs border-solid border-y-2 border-black-500">
    <tr className="bg-white">
      <th scope="col" className="px-6 py-3">COURIER PARTNER</th>
      <th scope="col" className="px-6 py-3">RATING</th>
      <th scope="col" className="px-6 py-3">EXPECTED PICKUP</th>
      <th scope="col" className="px-6 py-3">ESTIMATED DELIVERY</th>
      <th scope="col" className="px-6 py-3">CHARGEABLE WEIGHT</th>
      <th scope="col" className="px-6 py-3">CHARGES</th>
      <th scope="col" className="px-6 py-3">ACTIONS</th>
    </tr>
  </thead>
  <tbody>
    {tabledata.map((data, index) => (
      <React.Fragment key={index}>
        <tr className="border-solid border-y-2  border-black-500 relative">
          <td className="px-6 py-4 font-medium flex items-center">
            <img
              className="h-10 w-10 ml-0 rounded-full mr-2"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="User Avatar"
            />
            {data["Courier Partner"]}
          </td>
          <td className="px-6 py-4">{data.Rating}</td>
          <td className="px-6 py-4">{data["Expected Pickup"]}</td>
          <td className="px-6 py-4">{data["Estimated Delivery"]}</td>
          <td className="px-6 py-4">{data["Chargeable Weight"]}</td>
          <td className="px-6 py-4">{data.Charges}</td>
          <td className="px-6 py-4">
            <button
              type="button"
              className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium text-sm px-5 py-2.5 me-2 mb-2"
            >
              Ship Now
            </button>
          </td>
          
        </tr>
        <tr className='border-transparent'>
          <td  className="col-span-7 relative">
            <hr className="border-dotted border-gray-300 mb-2 my-auto " />
            <div className=" text-right  text-black">
              <b className='px-3 mr-2'> Available Services: call before delivery</b>
              <b className='px-3 mr-2'> instant POD</b>
              <b className='px-3 mr-2'> Real Time Tracking</b>
            </div>
          </td>
        </tr>
        
      </React.Fragment>
    ))}
  </tbody>
</table>

        </div>
      </div>
    </div>
  );
}
