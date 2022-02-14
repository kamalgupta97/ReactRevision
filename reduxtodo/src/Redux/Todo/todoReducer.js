import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./todoActiontypes";

const initState = {
  todos: [],
};

export const todoReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_TODO: {
      return { ...state, todos: [...state.todos, payload] };
    }
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== payload),
      };
    case UPDATE_TODO:
      const updated = state.todos.find((item) => item.id == payload);
      updated.status = !updated.status;
      return { ...state, todos: [...state.todos] };
    default:
      return { ...state };
  }
};
