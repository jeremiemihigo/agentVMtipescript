// third-party
import { configureStore } from "@reduxjs/toolkit";

// project import
import { ReadUser } from "../Redux/user";
// ==============================|| REDUX TOOLKIT - MAIN STORE ||============================== //
import { ReadCommuniquer } from "../Redux/Documentation";
import reducers from "./reducers";
const store = configureStore({
  reducer: reducers,
});

const { dispatch } = store;

dispatch(ReadUser());
dispatch(ReadCommuniquer());

export { dispatch, store };
