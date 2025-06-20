// third-party
import { configureStore } from "@reduxjs/toolkit";

// project import
import { ReadUser } from "../Redux/user";
// ==============================|| REDUX TOOLKIT - MAIN STORE ||============================== //
import { Readaction } from "../Redux/actions";
import { ReadCommuniquer } from "../Redux/Documentation";
import { Readfeedback } from "../Redux/feedback";
import reducers from "./reducers";
const store = configureStore({
  reducer: reducers,
});

const { dispatch } = store;

dispatch(ReadUser());
dispatch(ReadCommuniquer());
dispatch(Readaction());
dispatch(Readfeedback());

export { dispatch, store };
