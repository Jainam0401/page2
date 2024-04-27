
"use client"
import axios from "axios";
// import React from "react";
import React, { useState,useEffect } from 'react';
import Formbar from "./Formbar";
import { Label, Textarea, Checkbox, Datepicker } from "flowbite-react";

import { formSchema } from "../../../schemas/buyerDetails/index";


import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import PickupAddressForm from "@/app/CreateOrders/pickupAddress";
import BuyerAddress from "@/app/CreateOrders/BuyerAddress";

const Form = React.forwardRef((props, ref) => {
  const [pincode, setPincode] = useState('');
  const [details, setDetails] = useState({
    district: '',
    deliveryStatus: '',
    country: '',
    state: '',
  });
  
   
 type FormData = z.infer<typeof formSchema>;
 const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
 } = useForm({
    resolver: zodResolver(formSchema),
 });
 useEffect(() => {
  const fetchDetails = async () => {
    try {
      const response = await axios.get(`https://api.postalpincode.in/pincode/${pincode}`);
      const pincodeDetails = response.data[0];
      setDetails({
        district: pincodeDetails.PostOffice[0].District,
        deliveryStatus: pincodeDetails.PostOffice[0].DeliveryStatus,
        country: pincodeDetails.PostOffice[0].Country,
        state: pincodeDetails.PostOffice[0].State,
      });
    } catch (error) {
      console.error("Error fetching pincode details:", error);
    }
  };

  if (pincode) {
    fetchDetails();
  }
}, [pincode]);

 const onSubmit = async (data: FormData) => {
  console.log("Submitted data:", data);
  try{
    const response = await axios.get(`https://api.postalpincode.in/pincode/${data.pincode}`)
    // console.log(response.data[0].PostOffice[0].District)
    // console.log(response.data[0].PostOffice[0].DeliveryStatus)
    // console.log(response.data[0].PostOffice[0].Country)
    // console.log(response.data[0].PostOffice[0].State)
    const pincodeDetails = response.data[0];
      // setDistrict(pincodeDetails.PostOffice[0].District);
      // setDeliveryStatus(pincodeDetails.PostOffice[0].DeliveryStatus);
      // setCountry(pincodeDetails.PostOffice[0].Country);
      // setState(pincodeDetails.PostOffice[0].State);

  }catch{
    console.log("error")
  }


  // try {
  //   const response = await axios.post(
  //     `https://api.airtable.com/v0/{baseId}/{tableName}`,
  //     { fields: data },
  //     {
  //       headers: {
  //         Authorization: `Bearer {validAirtableApiKeyOrBearerToken}`,
  //         "Content-Type": "application/json",
  //       },
  //     }
  //   );
  //   console.log("Data sent to Airtable:", response.data);
  //   alert("Data sent to Airtable successfully!");
  //   reset();
  // } catch (error) {
  //   console.error("Error sending data to Airtable:", error);
  //   alert("Error sending data to Airtable. Please try again.");
  // }
};

const [currentSection, setCurrentSection] = useState('pickup'); // Add this line

 return (
  <form onSubmit={handleSubmit(onSubmit)}>
      {/* Form content */}
      <div className="bg-white p-2 rounded-lg">
      <Formbar setCurrentSection={setCurrentSection} /> {/* Pass the callback function */}
      {currentSection === 'pickup' && ( <div>
      <PickupAddressForm/>
      </div>
   )} 
   {currentSection === 'buyer' && (
    // Render the buyer address form section
    <>
       <BuyerAddress/>
    </>
  )}
      </div>
    </form>
 );
});

export default Form;
