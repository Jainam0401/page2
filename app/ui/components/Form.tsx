
"use client"
import React from "react";
import Formbar from "./Formbar";
import { Label, Textarea, Checkbox, Datepicker } from "flowbite-react";
import Input from "../elements/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const Form = React.forwardRef((props, ref) => {
 const formSchema = z.object({
    fullName: z.string().min(1, "Full name is required"),
    email: z.string().email("Invalid email address").optional(),
    mobileNumber: z.number().positive("Mobile number must be a positive number"),
    pincode: z.number().positive("Pincode must be a positive number"),
    state: z.string().min(1, "State is required"),
    address: z.string().min(1, "Address is required"),
    date: z.string().min(1, "Date of shipment is required"),
    country: z.string().min(1, "Country is required"),
    cityName: z.string().min(1, "City name is required"),
    landmark: z.string().optional(),
    others: z.string().optional(),
    gstin: z.string().optional(),
    companyName: z.string().min(1, "Company name is required"),
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

 const onSubmit = async (data: FormData) => {
    try {
      console.log("Form data:", data);
      reset(); // Reset form after successful submission
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle submission errors here
    }
 };

 return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Form content */}
      <div className="bg-white p-2 rounded-lg">
        <Formbar />
        <div className="border-2 py-2 border-black rounded-md px-4">
          {/* Buyer Details */}
          <div className="">
            <p className="py-2 font-bold text-gray-700">Buyer Details</p>
            <div className="grid grid-cols-1 py-2 gap-4 md:grid-cols-3">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block mb-2 text-sm font-medium text-gray-500">Full Name</label>
                <Input
                 {...register("fullName")}
                 id="fullName"
                 className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                 placeholder="Enter your full name"
                />
                {errors.fullName && <p className="text-red-500">{errors.fullName?.message}</p>}
              </div>
              {/* Email */}
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-500">Email (Optional)</label>
                <Input
                 {...register("email")}
                 id="email"
                 className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                 placeholder="Enter your full name"
                />
              </div>
              {/* Mobile Number */}
              <div>
                <label htmlFor="mobileNumber" className="block mb-2 text-sm font-medium text-gray-500">Mobile number</label>
                <Input
                 {...register("mobileNumber")}
                 id="mobileNumber"
                 type="number"
                 className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                 placeholder="Enter your mobile number"
                />
                {errors.mobileNumber && <p className="text-red-500">{errors.mobileNumber.message}</p>}
              </div>
            </div>
          </div>


          {/* Buyer Address Details */}
          {/* Add the rest of the form fields here, following the same pattern */}

          <p className="py-2 font-bold text-gray-700">Buyer Address Details</p>
          {/* below details div  */}
          <div>
            <div className="flex flex-col md:flex-row w-full gap-4">
              <div className="w-full lg:w-1/2 md:w-full">
                <label
                  htmlFor="pincode"
                  className="block mb-2 text-sm font-medium text-gray-500"
                >
                  Pin Code
                </label>
                <Input
                  type="number"
                  id="pincode"
                  {...register("pincode", {
                    required: "Pincode is required",
                    pattern: {
                      value: /^\d+$/,
                      message: "Pincode should only contain digits",
                    },
                  })}
                  name="pincode"
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Enter your Pin Code"
                />
                {errors.pincode && (
                  <p className="text-red-500">{errors.pincode.message}</p>
                )}
              </div>
              <div className="w-full lg:w-1/2 md:w-full">
                <label
                  htmlFor="city"
                  className="block mb-2 text-sm font-medium text-gray-500"
                >
                  City Name
                </label>
                <Input
                  type="text"
                  id="cityName"
                  {...register("cityName", {
                    required: "City name is required",
                  })}
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Enter your City Name"
                />
                {errors.cityName && (
                  <p className="text-red-500">{errors.cityName.message}</p>
                )}
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full lg:w-1/2 md:w-full">
                <label
                  htmlFor="state"
                  className="block mb-2 text-sm font-medium text-gray-500"
                >
                  State
                </label>
                <Input
                  type="text"
                  id="state"
                  {...register("state", { required: "State is required" })}
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Enter your State"
                />
                {errors.state && (
                  <p className="text-red-500">{errors.state.message}</p>
                )}
              </div>
              <div className="w-full lg:w-1/2 md:w-full">
                <label
                  htmlFor="country"
                  className="block mb-2 text-sm font-medium text-gray-500"
                >
                  Country
                </label>
                <Input
                  type="text"
                  id="country"
                  {...register("country", { required: "Country is required" })}
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Enter your Country"
                />
                {errors.country && (
                  <p className="text-red-500">{errors.country.message}</p>
                )}
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <div className=" lg:w-1/2 md:w-full">
                <Label htmlFor="address" value="Complete address" />
                <Textarea
                  id="address"
                  placeholder="Leave a comment..."
                  {...register("address", { required: "Address is required" })}
                  rows={4}
                />
                {errors.address && (
                  <p className="text-red-500">{errors.address.message}</p>
                )}
              </div>
              <div className="lg:w-1/2 md:w-full">
                <Label htmlFor="landmark" value="LandMark (optional)" />
                <Textarea
                  id="landmark"
                  placeholder="Enter the landmark..."
                  {...register("landmark")}
                  rows={4}
                />
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full lg:w-1/2 md:w-full">
              <label
                  htmlFor="date"
                  className="block mb-2 text-sm font-medium text-gray-500"
                >
                  Others
                </label>
                <Input
                  type="date"
                  id="date"
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder=" date"
                  {...register("date")}
                />
              </div>
              <div className="w-full lg:w-1/2 md:w-full">
                <label
                  htmlFor="others"
                  className="block mb-2 text-sm font-medium text-gray-500"
                >
                  Others
                </label>
                <Input
                  type="text"
                  id="others"
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder=" Others"
                  {...register("others")}
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full lg:w-1/2 md:w-full">
                <label
                  htmlFor="Buyer"
                  className="block mb-2 text-sm font-medium text-gray-500"
                >
                  Buyer's Company name
                </label>
                <Input
                  type="text"
                  id="companyName"
                  {...register("companyName")}
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Enter your Buyer"
                />
              </div>
              <div className="w-full lg:w-1/2 md:w-full">
                <label
                  htmlFor="gstin"
                  className="block mb-2 text-sm font-medium text-gray-500"
                >
                  Buyer's GSTIN
                </label>
                <Input
                  type="text"
                  id="gstin"
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder=" Buyer's GSTIN"
                  {...register("gstin")}
                />
              </div>
            </div>
          </div>

        </div>
        {/* Form submission buttons */}
        <div className="flex ml-3 mt-2 items-center gap-2">
          <Checkbox id="shipping-address" />
          <Label htmlFor="shipping-address">Add different Shipping address</Label>
        </div>
        <div className="flex ml-3 mt-2 items-center gap-2">
          <Checkbox id="billing-address" />
          <Label htmlFor="billing-address">Add different Billing address</Label>
        </div>
        <div className="flex flex-col items-center space-y-5 md:flex-row md:space-x-5 md:space-y-0 md:p-4">
          <button type="reset" className="w-[150px] border-[1px] border-red-400 py-2 text-red-400 md:ml-auto">Reset Changes</button>
          <button type="submit" className="w-[150px] bg-red-400 py-2">Continue</button>
        </div>
      </div>
    </form>
 );
});

export default Form;
