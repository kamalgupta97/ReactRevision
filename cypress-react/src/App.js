import logo from "./logo.svg";
import React from "react";
import "./App.css";
import { TodoInput } from "./Components/TodoInput";
import { addTask } from "./Utils/axios";
import { TodoList } from "./Components/TodoList";

function App() {
  const [newTask, setnewTask] = React.useState("");
  const [todo, setTodos] = React.useState([]);
  const handleInput = (e) => {
    setnewTask(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const item = {
      title: newTask,
      completed: false,
    };
    addTask(item).then(({ data }) => setTodos([...todo, data]));
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tasks</h1>
        <TodoInput
          value={newTask}
          onChange={handleInput}
          onSubmit={handleSubmit}
        />
        <div className="todolist">
          {todo.map((item) => (
            <TodoList key={item.id} {...item} />
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
