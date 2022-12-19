import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { filterTodo } from "../redux/ducks/todo";
import category from "./category";

const FilterTodoList = () => {
  const dispatch = useDispatch();

  const [recentStatus, setRecentStatus] = useState("All Status");
  const [recentCategory, setRecentCategory] = useState({
    title: "All Category",
    color: "white",
  });
  const [recentSearch, setRecentSearch] = useState("");

  const onChangeFilter = (search, status, category) => {
    dispatch(
      filterTodo({
        search: search,
        status: status,
        category: category,
      })
    );
  };

  useEffect(
    () => {
      const timeOutId = setTimeout((e) => {
        onChangeFilter(recentSearch, recentStatus, recentCategory.title);
      }, 500);

      return () => {
        clearTimeout(timeOutId);
      };
    },
    [recentSearch]
  );

  return (
    <div className="p-3 shadow p-3 mb-4 bg-body rounded border">
      <h6>Filter Todo :</h6>

      <div className="d-flex flex-sm-row flex-column gap-3 mt-3">
        <input
          type="text"
          className="form-control me-auto"
          placeholder="Search Todo Here.."
          onChange={(e) => {
            setRecentSearch(e.target.value);
            
          }}
        ></input>

        <label className="my-auto">By Status :</label>
        <div className="dropdown">
          <div
            className="btn btn-light dropdown-toggle d-flex"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {recentStatus}
          </div>

          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a
                className="dropdown-item d-flex"
                onClick={() => {
                  setRecentStatus("All Status");
                  onChangeFilter(recentSearch, "All Status", recentCategory.title);
                }}
                href="#"
              >
                All Status
              </a>
            </li>
            <li>
              <a
                className="dropdown-item d-flex"
                onClick={() => {
                  setRecentStatus("Complete");
                  onChangeFilter(recentSearch, "Complete", recentCategory.title);
                }}
                href="#"
              >
                Complete
              </a>
            </li>
            <li>
              <a
                className="dropdown-item d-flex"
                onClick={() => {
                  setRecentStatus("Incomplete");
                  onChangeFilter(recentSearch, "Incomplete", recentCategory.title);
                }}
                href="#"
              >
                Incomplete
              </a>
            </li>
          </ul>
        </div>

        <label className="my-auto">By Priority Category :</label>
        <div className="dropdown">
          <div
            className="btn btn-light dropdown-toggle d-flex"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{ width: "fit-content !important" }}
          >
            <div
              className="dot border border-light rounded-circle align-self-center me-2"
              style={{ backgroundColor: recentCategory.color }}
            ></div>
            {recentCategory.title}
          </div>

          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a
                className="dropdown-item d-flex"
                onClick={() => {
                  setRecentCategory({ title: "All Category", color: "white" });
                  onChangeFilter(recentSearch, recentStatus, "All Category");
                }}
                href="#"
              >
                <div
                  className="dot border border-light rounded-circle align-self-center me-2"
                  style={{ backgroundColor: "white" }}
                ></div>
                All Category
              </a>
            </li>
            {category &&
              category.map((item, i) => (
                <li key={i}>
                  {/* <a className="dropdown-item d-flex" onClick={()=>handleRecentKategory(item)} href="#"> */}
                  <a
                    className="dropdown-item d-flex"
                    onClick={() => {
                      setRecentCategory(item);
                      onChangeFilter(recentSearch, recentStatus, item.title);
                    }}
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
    </div>
  );
};

export default FilterTodoList;
