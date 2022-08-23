import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Pizza } from "./types";

export const fetchPizzas = createAsyncThunk<Pizza[], Record<string, string>>(
   "pizza/fetchPizzasStatus",
   async (params) => {
     const { sortBy, order, category, search, currentPage } = params;
     const { data } = await axios.get<Pizza[]>(
       `https://62d95cdc9eedb699635a2306.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
     );
 
     return data;
   }
 );
 