"use client";
import React, { useState } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { MdOutlineHorizontalRule } from "react-icons/md";
import { PiNumberCircleTwoFill } from "react-icons/pi";
import axios from "axios";
import { ZodError, object, string, number } from "zod";

interface FormData{
  fullname: string;
  email: string;
  phoneNumber: string;
  pincode: string;
  city: string;
  state: string;
  country: string;
  completeAddress: string;
  landmark: string;
  dateOfShipment: string;
  others: string;
  buyersCompanyName: string;
  buyersGSTIN: string;
}

const Form: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
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

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    // console.log(typeof value);

    // Update form data
    setFormData({ ...formData, [name]: value });

    // Trigger validation for the current input field
    validateField(name, value);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    validateField(name, value);
  }

  const validateField = (fieldName: string, value: string) => {
    try {
      // Define Zod schema for the current field
      const fieldSchema = getFieldSchema(fieldName);

      // Validate the current field against the schema
      fieldSchema.parse(value);

      // If validation succeeds, remove any existing error message for the field
      setErrors((prevErrors) => {
        const newErrors = { ...prevErrors };
        delete newErrors[fieldName];
        return newErrors;
      });
    } catch (error) {
      // If validation fails, update the error message for the field
      if(error instanceof ZodError){
        const errorMessage = error.errors[0].message;
        setErrors((prevErrors) => ({
          ...prevErrors,
          [fieldName]: errorMessage,
        }));
      }
    }
  };

  const getFieldSchema = (fieldName: string) => {
    switch(fieldName){
      case "fullname":
        return string().nonempty("Full name is required");
      case "email":
        return string().email("Invalid email format").optional();
      case "phoneNumber":
        return string().length(10, "Phone number should have exactly 10 digits");
      case "pincode":
        return string().length(6, "Pincode should have exactly 6 digits");
      case "city":
        return string().nonempty("City is required");
      case "state":
        return string().nonempty("State is required");
      case "country":
        return string().nonempty("Country is required");
      case "completeAddress":
        return string().nonempty("Complete address is required");
      case "landmark":
        return string().optional();
      case "dateOfShipment":
        return string().nonempty("Date of shipment is required");
      case "others":
        return string().optional();
      case "buyersCompanyName":
        return string().optional();
      case "buyersGSTIN":
        return string().optional();
      default: 
        return string();
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {

      // Define Zod schema for form data
      const formDataSchema = object({
        fullname: string().nonempty("Full name is required"),
        email: string().email("Invalid email format").optional(),
        phoneNumber: string().length(10, "Phone number should have exactly 10 digits"),
        pincode: string().length(6, "Pincode should have exactly 6 digits"),
        city: string().nonempty("City is required"),
        state: string().nonempty("State is required"),
        country: string().nonempty("Country is required"),
        completeAddress: string().nonempty("Complete address is required"),
        landmark: string().optional(),
        dateOfShipment: string().nonempty("Date of shipment is required"),
        others: string().optional(),
        buyersCompanyName: string().optional(),
        buyersGSTIN: string().optional(),
      });

      // Parse and vaidate from data against the schema
      const validatedData = formDataSchema.parse(formData);

      // Save data to Airtable
      await axios.post("../api/Form", validatedData);
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
      if (error instanceof ZodError){
        // If ZodError, extract error messages and update state with them
        const fieldErrors: { [key: string]: string } = {};
        error.errors.forEach((err) => {
          const path = err.path.join(".");
          fieldErrors[path] = err.message;
        });

        setErrors(fieldErrors);
      }
      else{
        // Handle other types of errors
        console.log("Error submitting form: ", error);
        alert("An error occured. Please try again later.");
      }
    }
  };

  const checkPin = async () => {
    try {
      const pincode = formData["pincode"];
      const response = await axios.get(`/api/Pincode?pincode=${pincode}`);
      
      if(response.data.delivery_codes.length > 0){

        const postal_code = response.data.delivery_codes[0].postal_code;
        console.log(postal_code);
      
        const city = response.data.delivery_codes[0].postal_code.city;
        console.log("City:", city);

        const district = response.data.delivery_codes[0].postal_code.district;
        console.log("District:", district);

        const state_code = response.data.delivery_codes[0].postal_code.state_code;
        console.log("State Code:", state_code);

        const country_code = response.data.delivery_codes[0].postal_code.country_code;
        console.log("Country Code:", country_code);

        // Update formData with city, state, and country from the response
        setFormData({
          ...formData,
          city: postal_code.city,
          state: postal_code.state_code,
          country: postal_code.country_code
        });
      }
      else{
        // If the pincode is not serviceable, display an alert
        alert("The provided pincode is not deliverable by Delhivery.");

        // Update formData with city, state, and country from the response
        setFormData({
          ...formData,
          city: "",
          state: "",
          country: ""
        });

      }
    } catch (error) {
      alert("Please enter a valid pincode");
      console.error("Error checking pincode:", error);
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
              <p className="my-1 text-sm font-bold ">Full Name<span className="text-red-500">*</span></p>
              <input
                className={`w-[100%] rounded-md border-[1px] border-slate-400 px-3 ${
                  errors.fullname ? "border-red-500" : ""
                }`}
                type="text"
                name="fullname"
                placeholder="Enter your full name"
                value={formData.fullname}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              {errors.fullname && (
                <p className="text-red-500 text-xs">
                  {errors.fullname}
                </p>
              )}
            </div>
            <div className="w-[200px] md:min-w-[30%]">
              <p className="my-1 text-sm font-bold">Email (Optional)</p>
              <input
                className={`w-[100%] rounded-md border-[1px] border-slate-400 px-3 ${
                  errors.email ? "border-red-500" : ""
                }`}
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && (
                <p className="text-red-500 text-xs">
                  {errors.email}
                </p>
              )}
            </div>
            <div className="w-[200px] md:min-w-[30%]">
              <p className="my-1 text-sm font-bold">Mobile No.<span className="text-red-500">*</span></p>
              <input
                className={`w-[100%] rounded-md border-[1px] border-slate-400 px-3" ${
                  errors.phoneNumber ? "border-red-500" : ""
                }`}
                type="number"
                name="phoneNumber"
                placeholder="Enter your mobile no."
                value={formData.phoneNumber}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              {errors.phoneNumber && (
                <p className="text-red-500 text-xs">
                  {errors.phoneNumber}
                </p>
              )}
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
                <p className="font-bold">Pincode<span className="text-red-500">*</span></p>
                <input
                  className={`my-2 w-[100%] rounded-md border-[1px] border-slate-400 px-3" ${
                    errors.pincode ? "border-red-500" : ""
                  }`}
                  type="number"
                  name="pincode"
                  placeholder="Enter pin"
                  value={formData.pincode}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                />
                {errors.pincode && (
                  <p className="text-red-500 text-xs">
                    {errors.pincode}
                  </p>
                )}
                <button className="text-blue-600 hover:text-blue-800 underline hover:no-underline focus:outline-none" onClick={checkPin}>Check Pin</button>
              </div>
              <div className="mt-3 w-[50%] min-w-[200px] md:mt-0 md:w-[100%]">
                <p className="font-bold">City<span className="text-red-500">*</span></p>
                <input
                  className={`my-2 w-[100%] rounded-md border-[1px] border-slate-400 px-3 ${
                    errors.city ? "border-red-500" : ""
                  }`}
                  type="text"
                  name="city"
                  placeholder="Enter city name"
                  value={formData.city}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  readOnly
                  required
                />
                {errors.city && (
                  <p className="text-red-500">
                    {errors.city}
                  </p>
                )}
              </div>
            </div>
            <div className="flex flex-col items-center pt-4 md:flex-row md:space-x-4">
              <div className="w-[50%] min-w-[200px] md:w-[100%]">
                <p className="font-bold">State<span className="text-red-500">*</span></p>
                <input
                  className={`my-2 w-[100%] rounded-md border-[1px] border-slate-400 px-3 ${
                    errors.state ? "border-red-500" : ""
                  }`}
                  type="text"
                  name="state"
                  placeholder="Enter your state"
                  value={formData.state}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  readOnly
                  required
                />
                {errors.start && (
                  <p className="text-red-500">
                    {errors.state}
                  </p>
                )}
              </div>
              <div className="mt-3 w-[50%] min-w-[200px] md:mt-0 md:w-[100%]">
                <p className="font-bold">Country<span className="text-red-500">*</span></p>
                <input
                  className={`my-2 w-[100%] rounded-md border-[1px] border-slate-400 px-3 ${
                    errors.country ? "border-red-500" : ""
                  }`}
                  type="text"
                  name="country"
                  placeholder="Enter your country"
                  value={formData.country}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  readOnly
                  required
                />
                {errors.country && (
                  <p className="text-red-500">
                    {errors.country}
                  </p>
                )}
              </div>
            </div>
            <div className="flex flex-col items-center pt-4 md:flex-row md:space-x-4">
              <div className="w-[50%] min-w-[200px] md:w-[100%]">
                <p className="font-bold">Complete Address<span className="text-red-500">*</span></p>
                <textarea
                  className={`my-2 h-[80px] w-[100%] rounded-md border-[1px] border-slate-400 text-sm text-slate-400 ${
                    errors.completeAddress ? "border-red-500" : ""
                  }`}
                  name="completeAddress"
                  value={formData.completeAddress}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                >
                  House/Floor No., building name or street, locally
                </textarea>
                {errors.completeAddress && (
                  <p className="text-red-500">
                    {errors.completeAddress}
                  </p>
                )}
              </div>
              <div className="w-[50%] min-w-[200px] md:w-[100%]">
                <p className="font-bold">Landmark (Optional)</p>
                <textarea
                  className={`my-2 h-[80px] w-[100%] rounded-md border-[1px] border-slate-400 text-sm text-slate-400 ${
                    errors.landmark ? "border-red-500" : ""
                  }`}
                  name="landmark"
                  value={formData.landmark}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  Any nearby post office, market, Hospital as the landmark
                </textarea>
                {errors.landmark && (
                  <p className="text-red-500">
                    {errors.landmark}
                  </p>
                )}
              </div>
            </div>
            <div className="flex flex-col items-center pt-4 md:flex-row md:space-x-4">
              <div className="w-[50%] min-w-[200px] md:w-[100%]">
                <p className="font-bold">Date of Shipment<span className="text-red-500">*</span></p>
                <input
                  className={`my-2 w-[100%] rounded-md border-[1px] border-slate-400 px-3 ${
                    errors.dateOfShipment ? "border-red-500" : ""
                  }`}
                  type="date"
                  name="dateOfShipment"
                  placeholder="Enter Date of Shipment"
                  value={formData.dateOfShipment}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                />
                {errors.dateOfShipment && (
                  <p className="text-red-500">
                    {errors.dateOfShipment}
                  </p>
                )}
              </div>
              <div className="mt-3 w-[50%] min-w-[200px] md:mt-0 md:w-[100%]">
                <p className="font-bold">Others</p>
                <input
                  className={`my-2 w-[100%] rounded-md border-[1px] border-slate-400 px-3 ${
                    errors.Others ? "border-red-500" : ""
                  }`}
                  type="text"
                  name="others"
                  placeholder="Others"
                  value={formData.others}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.others && (
                  <p className="text-red-500">
                    {errors.others}
                  </p>
                )}
              </div>
            </div>
            <div className="flex flex-col items-center pt-4 md:flex-row md:space-x-4">
              <div className="w-[50%] min-w-[200px] md:w-[100%]">
                <p className="font-bold">Buyers Company Name (Optional)</p>
                <input
                  className={`my-2 w-[100%] rounded-md border-[1px] border-slate-400 px-3 ${
                    errors.buyersCompanyName ? "border-red-500" : ""
                  }`}
                  type="text"
                  name="buyersCompanyName"
                  placeholder="Company Name"
                  value={formData.buyersCompanyName}
                  onChange={handleChange}
                />
                {errors.buyersCompanyName && (
                  <p className="text-red-500">
                    {errors.buyersCompanyName}
                  </p>
                )}
              </div>
              <div className="mt-3 w-[50%] min-w-[200px] md:mt-0 md:w-[100%]">
                <p className="font-bold">Buyers GSTIN (Optional)</p>
                <input
                  className={`my-2 w-[100%] rounded-md border-[1px] border-slate-400 px-3 ${
                    errors.buyersGSTIN ? "border-red-500" : ""
                  }`}
                  type="number"
                  name="buyersGSTIN"
                  placeholder="GSTIN No."
                  value={formData.buyersGSTIN}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.buyersGSTIN && (
                  <p className="text-red-500">
                    {errors.buyersGSTIN}
                  </p>
                )}
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
