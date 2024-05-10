// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { v4 as uuidv4 } from "uuid";

// const Home = ({ Allproducts }) => {
//   const [filteredProduct, setFilteredProducts] = useState([]);
//   const [searchValue, setSearchValue] = useState("");
//   const [addNewProd, setAddNewProd] = useState(false);
//   const [inputVals, setInputVals] = useState({
//     id: uuidv4(),
//     image: "",
//     title: "",
//     price: "",
//     category: "",
//     rating: {
//       rate: "",
//       count: "",
//     },
//   });

//   useEffect(() => {
//     if (Allproducts) {
//       setFilteredProducts(Allproducts);
//     }
//   }, [Allproducts]);

//   return (
//     <>
//       <div className="max-w-md mx-auto mt-12">
//         <label
//           htmlFor="default-search"
//           className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
//         >
//           Search
//         </label>
//         <div className="relative">
//           <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
//             <svg
//               className="w-4 h-4 text-gray-500 dark:text-gray-400"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 20 20"
//             >
//               <path
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
//               />
//             </svg>
//           </div>
//           <input
//             type="text"
//             id="default-search"
//             className="mb-6 block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//             placeholder="Search Mockups, Logos..."
//             required=""
//             value={searchValue}
//             onChange={(e) => {
//               const value = e.target.value.toLowerCase();
//               setSearchValue(value);
//               const filteredArray = Allproducts.filter((product) =>
//                 product.title.toLowerCase().includes(value)
//               );
//               setFilteredProducts(filteredArray);
//             }}
//           />
//         </div>
//         {/* buttons for sorting */}
//       </div>
//       {addNewProd && (
//         <div className="max-w-sm mx-auto ">
//           {/* form for adding new product */}
//         </div>
//       )}

//       {/* Container for demo purpose */}
//       <div className="container my-12 py-12 mx-auto px-4 md:px-6 lg:px-12">
//         {/*Section: Design Block*/}
//         <section className="mb-20 text-gray-800">
//           <button
//             onClick={() => {
//               setAddNewProd(true);
//             }}
//             type="button"
//             className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
//           >
//             Add New Prod
//           </button>
//           <div className="block rounded-lg shadow-lg bg-white">
//             <div className="flex flex-col">
//               <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
//                 <div className="inline-block min-w-full sm:px-6 lg:px-8">
//                   <div className="overflow-hidden">
//                     <table className="min-w-full mb-0">
//                       <thead className="border-b bg-gray-50 rounded-t-lg text-left">
//                         <tr>
//                           <th
//                             scope="col"
//                             className="rounded-tl-lg text-sm font-medium px-6 py-4"
//                           >
//                             Picture{" "}
//                           </th>
//                           <th
//                             scope="col"
//                             className="text-sm font-medium px-6 py-4"
//                           >
//                             Title
//                           </th>
//                           <th
//                             scope="col"
//                             className="text-sm font-medium px-6 py-4"
//                           >
//                             Price
//                           </th>
//                           <th
//                             scope="col"
//                             className="text-sm font-medium px-6 py-4"
//                           >
//                             Category
//                           </th>
//                           <th
//                             scope="col"
//                             className="text-sm font-medium px-6 py-4"
//                           >
//                             Rating
//                           </th>
//                           <th
//                             scope="col"
//                             className="text-sm font-medium px-6 py-4"
//                           >
//                             Count
//                           </th>
//                           <th
//                             scope="col"
//                             className="rounded-tr-lg text-sm font-medium px-6 py-4"
//                           />
//                         </tr>
//                       </thead>
//                       <tbody>{/* mapping through filteredProduct */}</tbody>
//                     </table>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//         {/*Section: Design Block*/}
//       </div>
//       {/* Container for demo purpose */}
//     </>
//   );
// };

// export default Home;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { deleteById } from "../../services";
import { endPoints } from "../../services/api";

const Products = ({ state, dispatch, AllProducts }) => {
  console.log(AllProducts);
  const [filteredProduct, setFilteredProducts] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [addNewProd, setAddNewProd] = useState(false);
  const [inputVals, setInputVals] = useState({
    id: uuidv4(),
    image: "",
    title: "",
    price: "",
    category: "",
    rating: {
      rate: "",
      count: "",
    },
    comment: [],
  });
  //   useEffect(() => {
  //     if (AllProducts) {
  //       setFilteredProducts(AllProducts);
  //     }
  //   }, [AllProducts]);

  useEffect(() => {
    setFilteredProducts(AllProducts);
  }, [AllProducts]);

  const filterByCategory = (category) => {
    if (category === "All") {
      setFilteredProducts(AllProducts);
    } else {
      const filteredArray = AllProducts.filter(
        (product) => product.category.toLowerCase() === category.toLowerCase()
      );
      setFilteredProducts(filteredArray);
    }
  };

  return (
    <>
      <div className="max-w-md mx-auto mt-12">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="text"
            id="default-search"
            className="mb-6 block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Mockups, Logos..."
            required=""
            value={searchValue}
            onChange={(e) => {
              const value = e.target.value.toLowerCase();
              setSearchValue(value);
              const filteredArray = AllProducts.filter((product) =>
                product.title.toLowerCase().includes(value)
              );
              setFilteredProducts(filteredArray);
            }}
          />
        </div>
        <button
          onClick={() => {
            let sortedData = [...filteredProduct].sort((a, b) =>
              a.title.localeCompare(b.title)
            );
            setFilteredProducts(sortedData);
          }}
          type="button"
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          A-Z
        </button>
        <button
          onClick={() => {
            let sortedData = [...filteredProduct].sort((a, b) =>
              b.title.localeCompare(a.title)
            );
            setFilteredProducts(sortedData);
          }}
          type="button"
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          Z-A
        </button>
        <button
          onClick={() => {
            let sortedData = [...filteredProduct].sort(
              (a, b) => a.price - b.price
            );
            setFilteredProducts(sortedData);
          }}
          type="button"
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          LOW-HIGH
        </button>
        <button
          onClick={() => {
            let sortedData = [...filteredProduct].sort(
              (a, b) => b.price - a.price
            );
            setFilteredProducts(sortedData);
          }}
          type="button"
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          HIGH-LOW
        </button>
        <button
          onClick={() => {
            let sortedData = [...filteredProduct].sort(
              (a, b) => a.rating.rate - b.rating.rate
            );
            setFilteredProducts(sortedData);
          }}
          type="button"
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          Rating to low
        </button>
        <button
          onClick={() => {
            let sortedData = [...filteredProduct].sort(
              (a, b) => b.rating.rate - a.rating.rate
            );
            setFilteredProducts(sortedData);
          }}
          type="button"
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          Rating to high
        </button>
        <button
          onClick={() => {
            let sortedData = [...filteredProduct].sort(
              (a, b) => a.rating.count - b.rating.count
            );
            setFilteredProducts(sortedData);
          }}
          type="button"
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          Count to high
        </button>
        <button
          onClick={() => {
            let sortedData = [...filteredProduct].sort(
              (a, b) => b.rating.count - a.rating.count
            );
            setFilteredProducts(sortedData);
          }}
          type="button"
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          Count to low
        </button>
        <div className="max-w-md mx-auto mt-12">
          {/* Diğer arama bileşenleri */}

          {/* Kategori seçimi */}
          <div className="mb-6">
            <label
              htmlFor="category"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Select Category
            </label>
            <select
              id="category"
              className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={searchValue}
              onChange={(e) => {
                const category = e.target.value;
                setSearchValue(category);
                filterByCategory(category);
              }}
            >
              <option value="All">All</option>
              <option value="Electronics">Electronics</option>
              <option value="Men's Clothing">Men's Clothing</option>
              <option value="Women's Clothing">Women's Clothing</option>
              <option value="Jewelery">Jewelery</option>
              {/* Diğer kategoriler */}
            </select>
          </div>
          {/* Diğer filtreleme butonları */}
        </div>
      </div>
      {addNewProd && (
        <div className="max-w-sm mx-auto ">
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              image
            </label>
            <input
              type="text"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required=""
              value={inputVals.image}
              onChange={(e) => {
                setInputVals({ ...inputVals, image: e.target.value });
              }}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              title
            </label>
            <input
              type="text"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required=""
              value={inputVals.title}
              onChange={(e) => {
                setInputVals({ ...inputVals, title: e.target.value });
              }}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              price
            </label>
            <input
              type="text"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required=""
              value={inputVals.price}
              onChange={(e) => {
                setInputVals({ ...inputVals, price: e.target.value });
              }}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              category
            </label>
            <input
              type="text"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required=""
              value={inputVals.category}
              onChange={(e) => {
                setInputVals({ ...inputVals, category: e.target.value });
              }}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              rating
            </label>
            <input
              type="text"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required=""
              value={inputVals.rating.rate}
              onChange={(e) => {
                setInputVals({
                  ...inputVals,
                  rating: { rate: e.target.value },
                });
              }}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              count
            </label>
            <input
              type="text"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required=""
              value={inputVals.rating.count}
              onChange={(e) => {
                setInputVals({
                  ...inputVals,
                  rating: { count: e.target.value },
                });
              }}
            />
          </div>
          <button
            onClick={async () => {
              inputVals.title = "";
              await axios.post(
                "https://northwind.vercel.app/api/suppliers",
                inputVals
              );
              setAddNewProd(false);
            }}
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </div>
      )}

      {/* Container for demo purpose */}
      <div className="container my-12 py-12 mx-auto px-4 md:px-6 lg:px-12">
        {/*Section: Design Block*/}
        <section className="mb-20 text-gray-800">
          <button
            onClick={() => {
              setAddNewProd(true);
            }}
            type="button"
            className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          >
            Add New Prod
          </button>
          <div className="block rounded-lg shadow-lg bg-white">
            <div className="flex flex-col">
              <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="overflow-hidden">
                    <table className="min-w-full mb-0">
                      <thead className="border-b bg-gray-50 rounded-t-lg text-left">
                        <tr>
                          <th
                            scope="col"
                            className="rounded-tl-lg text-sm font-medium px-6 py-4"
                          >
                            Picture{" "}
                          </th>
                          <th
                            scope="col"
                            className="text-sm font-medium px-6 py-4"
                          >
                            Title
                          </th>
                          <th
                            scope="col"
                            className="text-sm font-medium px-6 py-4"
                          >
                            Price
                          </th>
                          <th
                            scope="col"
                            className="text-sm font-medium px-6 py-4"
                          >
                            Category
                          </th>
                          <th
                            scope="col"
                            className="text-sm font-medium px-6 py-4"
                          >
                            Rating
                          </th>
                          <th
                            scope="col"
                            className="text-sm font-medium px-6 py-4"
                          >
                            Count
                          </th>
                          <th
                            scope="col"
                            className="rounded-tr-lg text-sm font-medium px-6 py-4"
                          />
                        </tr>
                      </thead>
                      <tbody>
                        {filteredProduct &&
                          filteredProduct.map((product) => {
                            let bgColor = "";
                            if (product.rating?.count < 100) {
                              bgColor = "bg-red-200 border-b";
                            } else if (product.rating?.count < 200) {
                              bgColor = "bg-yellow-200 border-b";
                            }
                            return (
                              <tr className={bgColor} key={uuidv4()}>
                                <th
                                  scope="row"
                                  className="text-sm font-normal px-6 py-4 whitespace-nowrap text-left"
                                >
                                  <div className="flex flex-row items-center">
                                    <img
                                      className="rounded-full w-12"
                                      src={product.image}
                                      alt="Avatar"
                                    />
                                  </div>
                                </th>
                                <td className="text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
                                  <div className="flex flex-col">
                                    <p className="mb-0.5">{product.title}</p>
                                  </div>
                                </td>
                                <td className="align-middle text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
                                  <span className="text-xs py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-medium bg-green-200 text-green-600 rounded-full">
                                    ${product.price}
                                  </span>
                                </td>
                                <td className="align-middle text-gray-500 text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
                                  {product.category}
                                </td>
                                <td className="align-middle text-gray-500 text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
                                  {product.rating?.rate}
                                </td>
                                <td className="align-middle text-gray-500 text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
                                  {product.rating?.count}
                                </td>
                                <td className="align-middle text-right text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
                                  <button
                                    href="#!"
                                    className="font-medium text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 transition duration-300 ease-in-out"
                                  >
                                    Edit
                                  </button>
                                </td>
                                <td className="align-middle text-right text-sm font-normal px-6 py-4 whitespace-nowrap text-left">
                                  <button
                                    onClick={() => {
                                      deleteById(
                                        endPoints.products,
                                        product.id
                                      );
                                      let newArr = state.products.filter(
                                        (elem) => elem.id !== product.id
                                      );
                                      dispatch({
                                        type: "SetSuppliers",
                                        product: newArr,
                                      });
                                    }}
                                    href="#!"
                                    className="font-medium text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 transition duration-300 ease-in-out"
                                  >
                                    Delete
                                  </button>
                                </td>
                              </tr>
                            );
                          })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*Section: Design Block*/}
      </div>
      {/* Container for demo purpose */}
    </>
  );
};

export default Products;
