import { useState } from "react";
import {  useSelector } from "react-redux";
import "./App.css";
import DailyQuote from "./components/DailyQuote";
import FilterTodoList from "./components/FilterTodoList";
import ModalAddTodo from "./components/ModalAddTodo";
import TodoItem from "./components/TodoItem";
import BarLoader from "react-spinners/BarLoader";

function App() {
  const todo = useSelector((state) => state.todo);

  const [isLoading, setIsLoading] = useState(false);
  

  let filtered = [...todo.todoList]
  

  if(todo.filterStatus.category !== "All Category"){
    filtered = filtered.filter(obj =>  obj.category.title === todo.filterStatus.category);
  }

  if(todo.filterStatus.status !== "All Status"){
    filtered = filtered.filter(obj => obj.is_complete === (todo.filterStatus.status === 'Complete'));
  }

  if (todo.filterStatus.search){
    filtered =  filtered.filter(obj => JSON.stringify(Object.values(obj)).toLowerCase().includes(todo.filterStatus.search.toLowerCase()))
  } 

  
  return (
    <div className="App container">
      
      <ModalAddTodo setIsLoading={setIsLoading}/>
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
      <DailyQuote/>
      <FilterTodoList/>


      <BarLoader
          color={"#09094f"}
          loading={isLoading}
          width={"auto"}
          aria-label="Loading Spinner"
          data-testid="loader"
        />

      {filtered &&
        filtered.map((item, i) => (
        <TodoItem item={item} key={i} />
        ))}
    </div>
  );
}

export default App;
