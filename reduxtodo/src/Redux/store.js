import { createStore } from "redux";
import { todoReducer } from "./Todo/todoReducer";

export const store = createStore(todoReducer);
