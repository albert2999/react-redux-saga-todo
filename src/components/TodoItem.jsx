/* eslint-disable */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { completeTodo, deleteTodo } from "../redux/ducks/todo";
import category from "./category";
import ModalUpdateTodo from "./ModalUpdateTodo";

const TodoItem = (props) => {
  const dispatch = useDispatch();

  const handleComplete = (id) => {
    dispatch(completeTodo(id));
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const [isModal, setIsModal] = useState(false);

  const handleSetIsmodal = (val)=>{
    setIsModal(val);

  }


  return (
    <div
      className="p-3 d-flex shadow p-3 mb-4 bg-body rounded border"
      data-bs-toggle="tooltip"
      data-bs-placement="bottom"
      title={props.item.desc}
    >
      
      <div
        className="dot border border-light rounded-circle align-self-center me-2"
        style={{ backgroundColor: category.find((e)=> e.title == props.item.category.title).color }}
      ></div>

      <a
        href="#"
        className={`text-decoration-none text-dark align-self-center ${
          props.item.is_complete && "text-decoration-line-through"
        } `}
        onClick={() => handleComplete(props.item.id)}
      >
        {props.item.title}
      </a>
      <button
        className="btn btn-primary ms-auto me-2 "
        data-bs-toggle="modal"
        data-bs-target={`#updateModal${props.item.id}`}
        onClick={()=>setIsModal(true)}
        
      >
        Update
      </button>
      <button
        className="btn btn-danger "
        onClick={() => handleDelete(props.item.id)}
      >
        Delete
      </button>
        {isModal && <ModalUpdateTodo item={props.item} setIsModal={setIsModal}/>}
    </div>
  );
};

export default TodoItem;
