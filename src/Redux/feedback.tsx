/* eslint-disable no-unused-vars */
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { config, lien } from "../Static/static";

// Define the initial state type
interface feedbackState {
  feedback?: any; // You can replace 'any' with a more specific type if you know the structure of feedback data
  readfeedback: string;
  readfeedbackError: string | null;
}

// Define the initial state
const initialState: feedbackState = {
  feedback: undefined,
  readfeedback: "",
  readfeedbackError: null,
};

// Async thunk to read feedback data
export const Readfeedback = createAsyncThunk(
  "feedback/Readfeedback",
  async (_id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${lien}/readfeedback/vm`, config);
      return response.data;
    } catch (error: any) {
      if (error.response.data === "jwt malformed") {
        const navigation = useNavigate();
        localStorage.removeItem("auth");
        localStorage.removeItem("nom");
        localStorage.removeItem("codeAgent");
        localStorage.removeItem("codeZone");
        navigation("/", { replace: true });
      }
      const axiosError = error as AxiosError;
      return rejectWithValue(axiosError.response?.data);
    }
  }
);

// Create a slice of the store for feedback
const feedbackSlice = createSlice({
  name: "feedback",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(Readfeedback.pending, (state) => {
        state.readfeedback = "pending";
        state.readfeedbackError = null;
      })
      .addCase(Readfeedback.fulfilled, (state, action: PayloadAction<any>) => {
        state.feedback = action.payload;
        state.readfeedback = "";
        state.readfeedbackError = null;
      })
      .addCase(Readfeedback.rejected, (state, action: PayloadAction<any>) => {
        state.readfeedback = "rejected";
        state.readfeedbackError = action.payload;
      });
  },
});

export default feedbackSlice.reducer;
