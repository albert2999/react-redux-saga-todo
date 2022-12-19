import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/ducks/todo";
import category from "./category";


const ModalAddTodo = (props) => {
  const dispach = useDispatch();
  const [recentCategory, setRecentCategory] = useState({
    title: "Very High",
    color: "#dc3545",
  });
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  

  const handleAddTodo = () => {
    props.setIsLoading(true);
    setTimeout(() => {
      dispach(
        addTodo({
          title: title,
          desc: desc,
          category: recentCategory,
          is_complete: false,
        })
      );
      props.setIsLoading(false);
      setTitle("");
      setDesc("");
    }, 1000);
  };

  return (
    <div
      className="modal fade"
      id="addModal"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content ">
          <div className="modal-header px-4">
            <h5 className="modal-title" id="exampleModalLabel">
              Tambah List item
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
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
                value={desc}
                placeholder="Tambahkan Description todo"
                onChange={(e) => setDesc(e.target.value)}
              />
            </div>

            <label className="mb-2">Priority Category</label>

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
          <div className="modal-footer">
            <button
              type="button"
              data-bs-dismiss="modal"
              className="btn btn-success color-theme d-flex px-4 h-auto"
              onClick={() => handleAddTodo()}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalAddTodo;
