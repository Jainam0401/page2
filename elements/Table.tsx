import React from "react";
import { IoIosCall } from "react-icons/io";
import { FaBoltLightning } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import Button from "./button";
import TableHeading from "./TableHeading";

const tabledata = [
  {
    "Courier Partner": "Delhivery Air",
    Rating: "4.7/5",
    "Expected Pickup": "Forecasted",
    "Estimated Delivery": "Mar 12, 2014",
    "Chargeable Weight": "1 Kg",
    Charges: "₹151.21",
  },
  {
    "Courier Partner": "Ecom Premium and RDS Surface",
    Rating: "4.7/5",
    "Expected Pickup": "Today till 9PM",
    "Estimated Delivery": "Mar 12, 2014",
    "Available Services": ["Cash on delivery", "Request Free Tracking"],
    "Chargeable Weight": "1 Kg",
    Charges: "₹103.01",
  },
  {
    "Courier Partner": "Blart Logistics Service",
    Rating: "4.7/5",
    "Expected Pickup": "Tomorrow till noon",
    "Estimated Delivery": "Mar 13, 2014",
    "Available Services": ["Cash on delivery", "Request Free Tracking"],
    "Chargeable Weight": "1 Kg",
    Charges: "₹103.01",
  },
  // ...rest of the data
];

export default function table() {
  return (
    <div className="container mx-auto">

 
    <table className="bg-white w-full text-sm text-left overflow-auto">
      <TableHeading />
      <tbody>
        {tabledata.map((data, index) => (
          <React.Fragment key={index}>
            <tr className="border-solid border-y-2 border-black-500 relative">
              <td className="px-6 py-4 font-medium flex items-center">
                <div className="flex items-center">
                  <img
                    className="h-10 w-10 rounded-full mr-2"
                    src="https://www.namastedehradun.com/wp-content/uploads/2013/08/dtdc-courier-namaste-dehradun.jpg"
                    alt="Courier Logo"
                  />
                  <div>
                    <div className="font-semibold flex items-center">
                      {data["Courier Partner"]}
                    </div>
                    <div className="text-sm text-gray-500">
                      Air | Min-weight: 0.5 kg <br /> RTO Charges: ₹456.6
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 ">{data.Rating}</td>
              <td className="px-6 py-4">{data["Expected Pickup"]}</td>
              <td className="px-6 py-4">{data["Estimated Delivery"]}</td>
              <td className="pl-10 ml-10 py-4 mx-auto">
                {data["Chargeable Weight"]}
              </td>
              <td className="px-8 py-4 mx-auto">{data.Charges}</td>
              <td className="px-6 py-4">
                <Button/>
              </td>
            </tr>
            <tr className=" border-solid border-y-2 border-black ">
              <td colSpan={7}>
                <div className="float-right mr-5">
                  <div className="flex space-x-2 pl-[20px] font-xs ">
                    <h6>Available Services: </h6>
                    <IoIosCall className="w-5 h-5 ml-2" />
                    <h4>call before delivery</h4>
                    <FaBoltLightning className="w-5 h-5 ml-2" />
                    <h4>Instant POD</h4>
                    <FaLocationDot className="w-5 h-5 ml-2" />
                    <h4>Real Time Tracking</h4>
                  </div>
                </div>
              </td>
            </tr>
          </React.Fragment>
        ))}
      </tbody>
    </table>
    </div>
  );
}
