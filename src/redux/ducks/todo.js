/* eslint-disable */
// CONSTANTS
// ---------

const ADD_TODO = "ADD_TODO";
const UPDATE_TODO = "UPDATE_TODO";
const COMPLETE_TODO = "COMPLETE_TODO";
const DELETE_TODO = "DELETE_TODO";

// ACTIONS
// ---------


export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo ,
});

export const updateTodo = (todo) => ({
  type: UPDATE_TODO,
  payload: todo ,
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id ,
});

export const completeTodo = (id) => ({
  type: COMPLETE_TODO,
  payload: id ,
});

const initialState = [];

// const initialState = {
//   todo: [],
// };

// REDUCER
// --------

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
        action.payload.id = state.length + 1;
      return [action.payload, ...state ];

    case UPDATE_TODO:
        const idx = state.findIndex((e) => e.id == action.payload.id);
        state[idx] = action.payload;
      return [...state ];

    case DELETE_TODO:
        const filtered = state.filter((e) => e.id !== action.payload);
      return filtered;

    case COMPLETE_TODO:
        const index = state.findIndex((e) => e.id == action.payload);
        state[index].is_complete = !state[index].is_complete;  
      return [...state];

    default:
      return state;
  }
};
