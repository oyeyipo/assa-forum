import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import threadReducer from "./threadReducer";

export default combineReducers({
    auth: authReducer,
    threads: threadReducer,
    errors: errorReducer
});
