/** root reducer */
import { combineReducers, legacy_createStore as createStore } from "redux";
//module
import data from "reducers/module/dataReducer";
import modal from "reducers/module/modalReducer";
import request from "reducers/module/requestReducer";
import view from "reducers/module/viewReducer";

//test module
import content from "reducers/module/contentReducer";
import testTodo from "reducers/test/todo";
import testCount from "reducers/test/count";

// 여러 reducer를 사용하는 경우 reducer를 하나로 묶어주는 메소드입니다.
// store에 저장되는 리듀서는 오직 1개입니다.
const rootReducer = combineReducers({
  //module
  data,
  modal,
  request,
  view,
  //test module
  content,
  testTodo,
  testCount
});

const store = createStore(rootReducer);

export default store;