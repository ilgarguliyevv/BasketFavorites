import React, { useState } from "react";

const Post = () => {
  const [inputs, setInputs] = useState({
    companyName: "",
    contactName: "",
    address: {
      city: "",
      region: "",
    },
  });

  const [selectedEndpoint, setSelectedEndpoint] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Selected Endpoint:", selectedEndpoint);
    try {
      const response = await fetch(selectedEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      console.log("Data posted successfully!");
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  return (
    <div>
      <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
        <div className="mb-5">
          <label
            htmlFor="companyName"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Company Name
          </label>
          <input
            type="text"
            id="companyName"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
            value={inputs.companyName}
            onChange={(e) =>
              setInputs({ ...inputs, companyName: e.target.value })
            }
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="contactName"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Contact Name
          </label>
          <input
            type="text"
            id="contactName"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
            value={inputs.contactName}
            onChange={(e) =>
              setInputs({ ...inputs, contactName: e.target.value })
            }
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="city"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            City
          </label>
          <input
            type="text"
            id="city"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
            value={inputs.address.city}
            onChange={(e) =>
              setInputs({
                ...inputs,
                address: { ...inputs.address, city: e.target.value },
              })
            }
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="region"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Region
          </label>
          <input
            type="text"
            id="region"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
            value={inputs.address.region}
            onChange={(e) =>
              setInputs({
                ...inputs,
                address: { ...inputs.address, region: e.target.value },
              })
            }
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="endpoint"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Select Endpoint
          </label>
          <select
            id="endpoint"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            value={selectedEndpoint}
            onChange={(e) => setSelectedEndpoint(e.target.value)}
          >
            <option value="">Select</option>
            <option value="http://localhost:3000/users">Users</option>
            <option value="http://localhost:3000/products">Products</option>
          </select>
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Post;
