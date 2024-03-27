import React from "react";
import { IoIosCall } from "react-icons/io";
import { FaBoltLightning } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import TableHeading from "@/elements/TableHeading";
import BorderBottomComponent from "../components/BorderBottomComponent";
import Table from "@/elements/Table"


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

export default function TableCard() {
  return (
    <>
      <BorderBottomComponent />
      <Table/>
    </>
  );
}
