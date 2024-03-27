import React from "react";

function Form() {
  return (
    <div className="bg-white w-full p-4 rounded-lg pt-7">
      <div className="border-2 border-black rounded-md p-4">
        <div className="py-2">
          <p className="p-2 font-bold text-gray-700"> Buyer Details</p>
          <div className="w-full flex flex-col mx-auto md:flex-row ">
            <div className="w-full md:max-w-[33.33%] px-2">
              <label
                htmlFor="full name"
                className="inline-block mb-2 text-sm font-medium text-gray-500"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                aria-describedby="helper-text-explanation"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Enter your full name"
              />
            </div>
            <div className="w-full md:max-w-[33.33%] px-2">
              <label
                htmlFor="email"
                className="inline-block mb-2 text-sm font-medium text-gray-500"
              >
                Email (Optional)
              </label>
              <input
                type="email"
                id="email"
                aria-describedby="helper-text-explanation"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Enter your email"
              />
            </div>
            <div className="w-full md:max-w-[33.33%] px-2">
              <label
                htmlFor="number"
                className="inline-block mb-2 text-sm font-medium text-gray-500"
              >
                Mobile number
              </label>
              <input
                type="number"
                id="number"
                aria-describedby="helper-text-explanation"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Enter your mobile number"
              />
            </div>
          </div>
        </div>
        <div className="py-2">
          <p className="p-2 font-bold text-gray-700">Buyer Address Details</p>
          <div className="w-full grid md:grid-cols-2 ">
            <div className="w-full ">
              <div className="w-full px-2">
                <label
                  htmlFor="number"
                  className="inline-block mb-2 text-sm font-medium text-gray-500"
                >
                  Pin Code
                </label>
                <input
                  type="number"
                  id="number"
                  aria-describedby="helper-text-explanation"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Enter your Pin Code"
                />
              </div>
              {/* left inputs */}
              <div className="w-full ">
                <div className="w-full  px-2">
                  <label
                    htmlFor="State"
                    className="inline-block mb-2 text-sm font-medium text-gray-500"
                  >
                    State
                  </label>
                  <input
                    type="text"
                    id="name"
                    aria-describedby="helper-text-explanation"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Enter your State"
                  />
                </div>
              </div>
              <div className="w-full ">
                <div className="w-full px-2">
                  <label
                    htmlFor="State"
                    className="inline-block mb-2 text-sm font-medium text-gray-500"
                  >
                    State
                  </label>
                  <input
                    type="text"
                    id="name"
                    aria-describedby="helper-text-explanation"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Enter your State"
                  />
                </div>
              </div>
            </div>
            <div className="w-full ">
              <div className="w-full px-2">
                <label
                  htmlFor="City Name"
                  className="inline-block mb-2 text-sm font-medium text-gray-500"
                >
                  City Name
                </label>
                <input
                  type="text"
                  id="name"
                  aria-describedby="helper-text-explanation"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Enter your City Name"
                />
              </div>
            </div>
            <div className="w-full ">
              <div className="w-full px-2">
                <label
                  htmlFor="Country"
                  className="inline-block mb-2 text-sm font-medium text-gray-500"
                >
                  Country
                </label>
                <input
                  type="text"
                  id="name"
                  aria-describedby="helper-text-explanation"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Enter your Country"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
