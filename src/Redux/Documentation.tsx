/* eslint-disable no-unused-vars */
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { ICommuniquer } from "../Interface/ICommuniquer";
import { config, lien, communication } from "../Static/static";

// Define the initial state type

interface DocState {
  communiquer?: ICommuniquer; // You can replace 'any' with a more specific type if you know the structure of user data
  readContent: string;
  readContentError: string | null;
}

// Define the initial state
const initialState: DocState = {
  communiquer: undefined,
  readContent: "",
  readContentError: null,
};

// Async thunk to read user data
export const ReadCommuniquer = createAsyncThunk(
  "communiquer/ReadCommuniquer",
  async (_id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${communication}/mes_messages`, config);
      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError;
      return rejectWithValue(axiosError.response?.data);
    }
  }
);

// Create a slice of the store for user
const CommuniquerSlice = createSlice({
  name: "communiquer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(ReadCommuniquer.pending, (state) => {
        state.readContent = "pending";
        state.readContentError = null;
      })
      .addCase(
        ReadCommuniquer.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.communiquer = action.payload;
          state.readContent = "";
          state.readContentError = null;
        }
      )
      .addCase(
        ReadCommuniquer.rejected,
        (state, action: PayloadAction<any>) => {
          state.readContent = "rejected";
          state.readContentError = action.payload;
        }
      );
  },
});

export default CommuniquerSlice.reducer;
