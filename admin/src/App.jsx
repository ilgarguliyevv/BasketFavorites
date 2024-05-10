import { act, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Products from "./pages/Products";
import Admin from "./pages/Admin";
import Post from "./pages/Post";
import Edit from "./pages/Edit";
import NoPage from "./pages/NoPage";
import Users from "./pages/Users";
import { useEffect } from "react";
import { THIRD_BASE_URL } from "./services/api";
import { getUsersData } from "./services";
import { endPoints } from "./services/api";
import { getAllData } from "./services";
import { getAllDataProducts } from "./services";
import { useReducer } from "react";
import "./index.css";
import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cards from "./pages/Cards";
import Basket from "./pages/Basket";
import Favorites from "./pages/Favorites";
import { Provider } from "react-redux";

function App() {
  function reducer(state, action) {
    switch (action.type) {
      case "SetSuppliers":
        return {
          ...state,
          suppliers: action.suppliers,
        };
      case "SetProducts":
        return {
          ...state,
          products: action.products,
          filteredProd: action.products,
        };
      case "setAllProducts":
        return { ...state, AllProducts: action.AllProdutcs };
      case "setUsers":
        return {
          ...state,
          users: action.users,
        };
      case "setData":
        return { ...state, data: action.data };
      default:
        break;
    }
  }

  const [state, dispatch] = useReducer(reducer, {
    suppliers: [],
    products: [],
    filteredProd: [],
    users: [],
    AllProducts: [],
  });

  useEffect(() => {
    getAllData(endPoints.suppliers).then((res) => {
      dispatch({
        type: "SetSuppliers",
        suppliers: res,
      });
    });
  }, []);
  // useEffect(() => {
  //   getAllDataProducts(endPoints.products).then((response) => {
  //     dispatch({
  //       type: "setAllProducts",
  //       AllProducts: response,
  //     });
  //   });
  // }, []);

  useEffect(() => {
    getAllDataProducts(endPoints.products).then((response) => {
      dispatch({
        type: "setAllProducts",
        AllProducts: response,
      });
      setAllProductsData(response);
    });
  }, []);

  const { data, AllProducts } = state;

  const [allProductsData, setAllProductsData] = useState([]);

  // function reducer(state, action) {
  //   switch (action.type) {
  //     case "setUsers":
  //       return {
  //         ...state,
  //         users: action.users,
  //       };
  //     default:
  //       break;
  //   }
  // }

  // const [state, dispatch] = useReducer(reducer, {
  //   users: [],
  // });

  useEffect(() => {
    getUsersData(endPoints.users).then((response) => {
      dispatch({
        type: "setUsers",
        users: response,
      });
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="Login" element={<Login />} />
        <Route path="Register" element={<Register />} />
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={<Admin data={state.suppliers} dispatch={dispatch} />}
          />
          <Route
            path="Products"
            element={
              <Products
                state={state}
                dispatch={dispatch}
                AllProducts={allProductsData}
              />
            }
          />
          <Route
            path="Users"
            element={<Users state={state} dispatch={dispatch} />}
          />
          <Route path="Post" element={<Post />} />
          <Route path="Edit" element={<Edit />} />
          <Route path="Cards" element={<Cards />} />
          <Route path="Basket" element={<Basket />} />
          <Route path="Favorites" element={<Favorites />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
