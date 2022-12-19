/* eslint-disable */
export const GET_QUOTE = "GET_QUOTE";
const SET_QUOTE = "SET_QUOTE";

export const getQuote = () => ({
    type : GET_QUOTE
});

export const setQuote = (quote) => ({
    type: SET_QUOTE,
    payload : quote    
});

const initialState = {
    quote : undefined
}

export default (state = initialState, action) => {
    switch (action.type) {
      case SET_QUOTE:
        const { payload } = action;
        return { ...state, quote : payload };
      default:
        return state;
    }
  };
