import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PickupAddressSchema } from "../../schemas/pickupAddress/index";
import React from "react";
export default function PickupAddressForm() {
 const {
    register,
    handleSubmit,
    formState: { errors },
 } = useForm({
    resolver: zodResolver(PickupAddressSchema),
 });

 const onSubmit = (data:any) => {
    alert(data);
    // Handle form submission
 };

 return (
  <>
    <form onSubmit={handleSubmit(onSubmit)}>
     <div className="border-2 py-2 border-black rounded-md px-4">
 {/* Pickup Details */}
 <div className="">
    <p className="py-2 font-bold text-gray-700">Pickup Details</p>
    <div className="grid grid-cols-1 py-2 gap-4 md:grid-cols-3">
      {/* Full Name */}
      <div>
        <label htmlFor="pickupFullName" className="block mb-2 text-sm font-medium text-gray-500">Full Name</label>
        <input
          {...register("pickupFullName", { required: true })}
          id="pickupFullName"
          className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Enter your full name"
        />
        {errors.pickupFullName && <p className="text-red-500">{errors.pickupFullName.message}</p>}
      </div>
      {/* Mobile Number */}
      <div>
        <label htmlFor="pickupMobileNumber" className="block mb-2 text-sm font-medium text-gray-500">Mobile number</label>
        <input
          {...register("pickupMobileNumber")}
          id="pickupMobileNumber"
          type="number"
          className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Enter your mobile number"
        />
        {errors.pickupMobileNumber && <p className="text-red-500">{errors.pickupMobileNumber.message}</p>}
      </div>
    </div>
 </div>

 {/* Pickup Address Details */}
 <p className="py-2 font-bold text-gray-700">Pickup Address Details</p>
 <div>
    <div className="flex flex-col md:flex-row w-full gap-4">
      <div className="w-full lg:w-1/2 md:w-full">
        <label
          htmlFor="pickupPincode"
          className="block mb-2 text-sm font-medium text-gray-500"
        >
          Pin Code
        </label>
        <input
          type="number"
          id="pickupPincode"
          {...register("pickupPincode", {
            required: "Pincode is required",
            pattern: {
              value: /^\d+$/,
              message: "Pincode should only contain digits",
            },
          })}
          name="pickupPincode"
          className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Enter your Pin Code"
        />
        {errors?.pickupPincode && (
          <p className="text-red-500">{errors?.pickupPincode?.message}</p>
        )}
      </div>
      <div className="w-full lg:w-1/2 md:w-full">
        <label
          htmlFor="pickupCity"
          className="block mb-2 text-sm font-medium text-gray-500"
        >
          City Name
        </label>
        <input
          type="text"
          id="pickupCity"
          {...register("pickupCity")}
          className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Enter your City Name"
        />
        {errors.pickupCity && (
          <p className="text-red-500">{errors.pickupCity.message}</p>
        )}
      </div>
    </div>

    <div className="flex flex-col md:flex-row gap-4">
      <div className="w-full lg:w-1/2 md:w-full">
        <label
          htmlFor="pickupState"
          className="block mb-2 text-sm font-medium text-gray-500"
        >
          State
        </label>
        <input
          type="text"
          id="pickupState"
          {...register("pickupState", { required: "State is required" })}
          className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Enter your State"
        />
        {errors.pickupState && (
          <p className="text-red-500">{errors.pickupState.message}</p>
        )}
      </div>
      <div className="w-full lg:w-1/2 md:w-full">
        <label
          htmlFor="pickupCountry"
          className="block mb-2 text-sm font-medium text-gray-500"
        >
          Country
        </label>
        <input
          type="text"
          id="pickupCountry"
          {...register("pickupCountry", { required: "Country is required" })}
          className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Enter your Country"
        />
        {errors.pickupCountry && (
          <p className="text-red-500">{errors.pickupCountry.message}</p>
        )}
      </div>
    </div>

    <div className="flex flex-col md:flex-row gap-4">
      <div className="w-full lg:w-1/2 md:w-full">
        <label
          htmlFor="pickupAddress"
          className="block mb-2 text-sm font-medium text-gray-500"
        >
          Complete address
        </label>
        <textarea
          id="pickupAddress"
          placeholder="Enter your complete address..."
          {...register("pickupAddress", { required: "Address is required" })}
          rows={4}
          className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
        {errors.pickupAddress && (
          <p className="text-red-500">{errors.pickupAddress.message}</p>
        )}
      </div>
    </div>
    <div className="flex flex-col items-center space-y-5 md:flex-row md:space-x-5 md:space-y-0 md:p-4">
          <button type="reset" className="w-[150px] border-[1px] border-red-400 py-2 text-red-400 md:ml-auto">Reset Changes</button>
          <button type="submit" className="w-[150px] bg-red-400 py-2">Continue</button>
        </div>

 </div>
</div>

    </form>
  </>
 );
}
