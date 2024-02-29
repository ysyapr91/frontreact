import { createStore } from 'redux';

const ADD = 'add';
const DELETE = 'delete';

export const addToDo = (text, id) => {
  return { type: ADD, text, id };
};

export const deleteToDo = (id) => {
  return { type: DELETE, id };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [{ text: action.text, id: action.id }, ...state];
    case DELETE:
      return state.filter((toDo) => toDo.id !== action.id);
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;