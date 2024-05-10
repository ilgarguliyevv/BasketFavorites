import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  basket: JSON.parse(localStorage.getItem("basket")) || {},
  favorites: JSON.parse(localStorage.getItem("favorites")) || [],
};

export const getProducts = createAsyncThunk("getProducts", async () => {
  const products = await axios("http://localhost:3000/products");
  return products.data;
});

export const basketSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    setBasket: (state, action) => {
      let elemIndex = state.basket.findIndex(
        (elem) => elem.id === action.payload.id
      );
      if (elemIndex === -1) {
        state.basket = [...state.basket, { ...action.payload, count: 1 }];
      } else {
        state.basket[elemIndex].count++;
      }
      localStorage.setItem("basket", JSON.stringify([...state.basket]));
    },
    setFavorites: (state, action) => {
      let elemIndex = state.favorites.findIndex(
        (elem) => elem.id === action.payload.id
      );
      if (elemIndex === -1) {
        state.favorites = [...state.favorites, { ...action.payload, count: 1 }];
      } else {
        state.favorites[elemIndex].count++;
      }
      localStorage.setItem("favorites", JSON.stringify([...state.favorites]));
    },
  },
});

export const { setBasket, setFavorites } = basketSlice.actions;

export default basketSlice.reducer;
