import axios from "axios";

export const addTask = (data) => {
  return axios.post("http://localhost:3004/task", data);
};
