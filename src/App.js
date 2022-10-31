import { useSelector } from "react-redux";
import "./App.css";
import ModalAddTodo from "./components/ModalAddTodo";
import TodoItem from "./components/TodoItem";

function App() {
  const todo = useSelector((state) => state.todo);
  console.log(todo);
  
  return (
    <div className="App container">
      <ModalAddTodo />
      <div className="d-flex p-4">
        <h1>Todo List App</h1>
        <button
          className="btn btn-success ms-auto"
          data-bs-toggle="modal"
          data-bs-target="#addModal"
        >
          Add Todo
        </button>
      </div>

      {todo &&
        todo.map((item, i) => (
          
        <TodoItem item={item} key={i} />
        ))}
    </div>
  );
}

export default App;
