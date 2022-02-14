import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./todoActiontypes";

export const addTodo = (payload) => {
  return { type: ADD_TODO, payload };
};

export const updateTodo = (payload) => {
  return { type: UPDATE_TODO, payload };
};

export const deleteTodo = (payload) => {
  return { type: DELETE_TODO, payload };
};
