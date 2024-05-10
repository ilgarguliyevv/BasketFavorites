import React from "react";
import { deleteById, getAllData } from "../../services";
import { endPoints } from "../../services/api";
import { data } from "autoprefixer";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
const Admin = ({ data, dispatch }) => {
  const navigate = useNavigate();
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-12">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              comapny name
            </th>
            <th scope="col" className="px-6 py-3">
              contact name
            </th>
            <th scope="col" className="px-6 py-3">
              city
            </th>
            <th scope="col" className="px-6 py-3">
              region
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">action</span>
            </th>
          </tr>
        </thead>
        <tbody key={uuidv4()}>
          {data.map((supplier) => {
            return (
              <tr
                key={uuidv4()}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {supplier.companyName}
                </th>
                <td className="px-6 py-4">{supplier.contactName}</td>
                <td className="px-6 py-4">{supplier.address.city}</td>
                <td className="px-6 py-4">{supplier.address.region}</td>
                <td className="px-6 py-4 text-right">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-6"
                    onClick={() => {
                      navigate("/edit", { state: supplier.id });
                    }}
                  >
                    Edit
                  </a>

                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    onClick={() => {
                      deleteById(endPoints.suppliers, supplier.id);
                      let newArr = data.filter(
                        (elem) => elem.id !== supplier.id
                      );
                      dispacth({
                        type: "setData",
                        data: [...newArr],
                      });
                    }}
                  >
                    Delete
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
