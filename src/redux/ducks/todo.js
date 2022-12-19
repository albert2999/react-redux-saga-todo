/* eslint-disable */
// CONSTANTS
// ---------

const ADD_TODO = "ADD_TODO";
const UPDATE_TODO = "UPDATE_TODO";
const COMPLETE_TODO = "COMPLETE_TODO";
const DELETE_TODO = "DELETE_TODO";
const FILTER_TODO = "FILTER_TODO";

// ACTIONS
// --------

export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo,
});

export const updateTodo = (todo) => ({
  type: UPDATE_TODO,
  payload: todo,
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id,
});

export const completeTodo = (id) => ({
  type: COMPLETE_TODO,
  payload: id,
});

export const filterTodo = (id) => ({
  type: FILTER_TODO,
  payload: id,
});

// REDUCER
// --------
const initialState = {
  filterStatus: {
    search: "",
    category: "All Category",
    status: "All Status",
  },
  todoList: [
    {
      id: 3,
      title: "Menanak Nasi (initial State)",
      desc: "Ini Adalah Deskripsi (Initial State)",
      category: {
        title: "Very High",
        color: "#dc3545",
      },
      is_complete: true,
    },
    {
      id: 2,
      title: "Clean Room (initial State)",
      desc: "Ini Adalah Deskripsi (Initial State)",
      category: {
        title: "Normal",
        color: "#00A790",
      },
      is_complete: false,
    },
    {
      id: 1,
      title: "Buang Sampah (initial State)",
      desc: "Ini Adalah Deskripsi (Initial State)",
      category: {
        title: "High",
        color: "#F8A541",
      },
      is_complete: false,
    },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      action.payload.id = state.todoList.length + 1;
      state.todoList = [action.payload, ...state.todoList];
      return { ...state };

    case UPDATE_TODO:
      const idx = state.todoList.findIndex((e) => e.id == action.payload.id);
      state.todoList[idx] = action.payload;
      return { ...state };

    case DELETE_TODO:
      state.todoList = state.todoList.filter((e) => e.id !== action.payload);
      return { ...state };

    case COMPLETE_TODO:
      const index = state.todoList.findIndex((e) => e.id == action.payload);
      state.todoList[index].is_complete = !state.todoList[index].is_complete;
      return { ...state };

    case FILTER_TODO:
      state.filterStatus = action.payload;
    return { ...state };

    default:
      return state;
  }
};
