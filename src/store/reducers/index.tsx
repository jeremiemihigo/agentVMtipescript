// third-party
import { combineReducers } from "redux";

// project import

import action from "../../Redux/actions";
import communiquer from "../../Redux/Documentation";
import servey from "../../Redux/servey";
import user from "../../Redux/user";

// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({ user, communiquer, action, servey });

export default reducers;
