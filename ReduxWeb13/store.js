import { createStore } from "redux";

const addCount = { type: "INC_COUNT", payload: 1 };
const decCount = { type: "DEC_COUNT", payload: 1 };
const addTodos = {
  type: "ADD_TODO",
  payload: { id: 1, task: "Learn Redux", iscompleted: false },
};

const reducer = (store, action) => {
  switch (action.type) {
    case "INC_COUNT":
      return { ...store, count: store.count + action.payload };
    case "DEC_COUNT":
      return { ...store, count: store.count - action.payload };
    case "ADD_TODO":
      return { ...store, todos: [...store.todos, action.payload] };
    default:
      return { ...store };
  }
};
const init = { count: 0, todos: [] };
const store = createStore(reducer, init);

store.dispatch(addCount);
store.dispatch(decCount);
store.dispatch(addCount);

store.dispatch(addCount);
store.dispatch(addCount);
store.dispatch(addCount);
store.dispatch(addTodos);
console.log(store.getState());
