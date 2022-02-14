const addCount = { type: "INC_COUNT", payload: 1 };
const decCount = { type: "DEC_COUNT", payload: 1 };
const addTodos = {
  type: "ADD_TODO",
  payload: { id: 1, task: "Learn Redux", iscompleted: false },
};
class Store {
  constructor(reducer, init) {
    this.reducer = reducer;
    this.state = init;
  }
  getState() {
    return this.state;
  }
  dispatch(action) {
    this.state = this.reducer(this.state, action);
  }
}

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

const store = new Store(reducer, { count: 0, todos: [] });
store.dispatch(addCount);
store.dispatch(decCount);
store.dispatch(addCount);

store.dispatch(addCount);
store.dispatch(addCount);
store.dispatch(addCount);
store.dispatch(addTodos);
console.log(store.getState());
