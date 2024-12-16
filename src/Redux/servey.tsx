/* eslint-disable no-unused-vars */
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { config, lien_terrain } from "../Static/static";

// Define the initial state type
interface serveyState {
  servey?: any; // You can replace 'any' with a more specific type if you know the structure of servey data
  readservey: string;
  readserveyError: string | null;
}

// Define the initial state
const initialState: serveyState = {
  servey: undefined,
  readservey: "",
  readserveyError: null,
};

// Async thunk to read servey data
export const Readservey = createAsyncThunk(
  "servey/Readservey",
  async (_id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${lien_terrain}/servey_agent`, config);
      return response.data;
    } catch (error: any) {
      const axiosError = error as AxiosError;
      return rejectWithValue(axiosError.response?.data);
    }
  }
);

// Create a slice of the store for servey
const serveySlice = createSlice({
  name: "servey",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(Readservey.pending, (state) => {
        state.readservey = "pending";
        state.readserveyError = null;
      })
      .addCase(Readservey.fulfilled, (state, action: PayloadAction<any>) => {
        state.servey = action.payload;
        state.readservey = "";
        state.readserveyError = null;
      })
      .addCase(Readservey.rejected, (state, action: PayloadAction<any>) => {
        state.readservey = "rejected";
        state.readserveyError = action.payload;
      });
  },
});

export default serveySlice.reducer;
