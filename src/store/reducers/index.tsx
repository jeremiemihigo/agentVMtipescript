// third-party
import { combineReducers } from "redux";

// project import

import communiquer from "../../Redux/Documentation";
import user from "../../Redux/user";

// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({ user, communiquer });

export default reducers;
