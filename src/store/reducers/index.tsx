// third-party
import { combineReducers } from "redux";

// project import

import action from "../../Redux/actions";
import communiquer from "../../Redux/Documentation";
import feedback from "../../Redux/feedback";
import user from "../../Redux/user";

// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({ user, feedback, communiquer, action });

export default reducers;
