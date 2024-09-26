/* eslint-disable no-unused-vars */
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { config, lien } from "../Static/static";

// Define the initial state type
interface UserState {
  user?: any; // You can replace 'any' with a more specific type if you know the structure of user data
  readUser: string;
  readUserError: string | null;
}

// Define the initial state
const initialState: UserState = {
  user: undefined,
  readUser: "",
  readUserError: null,
};

// Async thunk to read user data
export const ReadUser = createAsyncThunk(
  "user/ReadUser",
  async (_id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${lien}/user`, config);
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

// Create a slice of the store for user
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(ReadUser.pending, (state) => {
        state.readUser = "pending";
        state.readUserError = null;
      })
      .addCase(ReadUser.fulfilled, (state, action: PayloadAction<any>) => {
        state.user = action.payload;
        state.readUser = "";
        state.readUserError = null;
      })
      .addCase(ReadUser.rejected, (state, action: PayloadAction<any>) => {
        state.readUser = "rejected";
        state.readUserError = action.payload;
      });
  },
});

export default userSlice.reducer;
