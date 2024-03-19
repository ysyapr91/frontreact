import { applyMiddleware, compose, legacy_createStore as createStore } from "redux";
import reducer from "redux/reducers/rootReducer";

const initState = {
    test: {},
    content: {}
};

const firstMiddleware = (store) => (dispatch) => (action) => {
    console.log('action', action);
    dispatch(action);
}

const enhancer = compose(
    applyMiddleware(firstMiddleware)
)

const store = createStore(reducer, initState, enhancer);

export default store;