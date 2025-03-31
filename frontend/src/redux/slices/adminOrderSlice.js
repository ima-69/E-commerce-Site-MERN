 import { createSlice, createAsyncThunk, __DO_NOT_USE__ActionTypes } from "@reduxjs/toolkit";
 import axios from "axios";

 // Fetch all orders (admin only)
 export const fetchAllOrders = createAsyncThunk(
    "adminOrders/fetchAllOrders",
    async (__DO_NOT_USE__ActionTypes, {rejectWithValue}) => {
        try {
            const response = await axios.get(
                `${import.meta.env.VITE_BACKEND_URL}/api/admin/orders`,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
                    },
                }
            );
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
 );