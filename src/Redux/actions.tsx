/* eslint-disable no-unused-vars */
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { config, lien_dt } from "../Static/static";

// Define the initial state type
interface actionState {
  action?: any; // You can replace 'any' with a more specific type if you know the structure of action data
  readaction: string;
  readactionError: string | null;
}

// Define the initial state
const initialState: actionState = {
  action: undefined,
  readaction: "",
  readactionError: null,
};

// Async thunk to read action data
export const Readaction = createAsyncThunk(
  "action/Readaction",
  async (_id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${lien_dt}/actionAgent`, config);
      return response.data;
    } catch (error: any) {
      const axiosError = error as AxiosError;
      return rejectWithValue(axiosError.response?.data);
    }
  }
);
// Create a slice of the store for action
const actionSlice = createSlice({
  name: "action",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(Readaction.pending, (state) => {
        state.readaction = "pending";
        state.readactionError = null;
      })
      .addCase(Readaction.fulfilled, (state, action: PayloadAction<any>) => {
        state.action = action.payload;
        state.readaction = "";
        state.readactionError = null;
      })
      .addCase(Readaction.rejected, (state, action: PayloadAction<any>) => {
        state.readaction = "rejected";
        state.readactionError = action.payload;
      });
  },
});

export default actionSlice.reducer;
