import { combineReducers } from "redux";
import test from "redux/reducers/testReducer";
import content from "redux/reducers/contentReducer";

const rootReducer = combineReducers({
    test,
    content
});

export default rootReducer;