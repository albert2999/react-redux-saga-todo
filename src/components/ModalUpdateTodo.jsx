import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTodo } from "../redux/ducks/todo";
import category from "./category";

const ModalUpdateTodo = (props) => {
  const dispatch = useDispatch();
  const [recentCategory, setRecentCategory] = useState(props.item?.category);
  const [title, setTitle] = useState(props.item?.title);
  const [desc, setDesc] = useState(props.item?.desc);

  const handleUpdateTodo = (id) => {
    dispatch(
      updateTodo({
        id , 
        title: title,
        desc: desc,
        category: recentCategory,
        is_complete: props.item.is_complete,
      })
    );
    props.setIsModal(false);
  };

  return (

    <div className="modal-bg">
      <div className="card modal-card">
        <div className="card-header d-flex mt-2">
          <h5>Edit Todo</h5>
          <button type="button" className="btn-close ms-auto" onClick={()=>props.setIsModal(false)}></button>
        </div>
        <div className="card-body">
          <div className="modal-body py-4 px-4">
            <label className="mb-2">Title Todo</label>
            <div className="mb-4">
              <input
                className="w-100"
                type="text"
                placeholder="Tambahkan Title todo"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <label className="mb-2">Todo Decription</label>
            <div className="mb-4">
              <input
                className="w-100"
                type="text"
                placeholder="Tambahkan Description todo"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              />
            </div>

            <label className="mb-2">PRIORITY</label>

            <div className="dropdown">
              <div
                className="btn btn-light dropdown-toggle d-flex"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <div
                  className="dot border border-light rounded-circle align-self-center me-2"
                  style={{ backgroundColor: recentCategory.color }}
                ></div>
                {recentCategory.title}
              </div>

              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                {category &&
                  category.map((item, i) => (
                    <li key={i}>
                      {/* <a className="dropdown-item d-flex" onClick={()=>handleRecentKategory(item)} href="#"> */}
                      <a
                        className="dropdown-item d-flex"
                        onClick={() => setRecentCategory(item)}
                        href="#"
                      >
                        <div
                          className="dot border border-light rounded-circle align-self-center me-2"
                          style={{ backgroundColor: item.color }}
                        ></div>
                        {item.title}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          <div className="modal-footer pb-0">
            <button
              type="button"
              className="btn btn-success color-theme d-flex px-4 h-auto"
              onClick={() => handleUpdateTodo(props.item.id)}
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalUpdateTodo;
