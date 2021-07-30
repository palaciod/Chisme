import {combineReducers} from "redux";
import userReducers from "./user/UserReducer";
import postReducer from "./posts/PostReducer";
const rootReducer = combineReducers({
    user: userReducers,
    posts: postReducer
});

export default rootReducer;