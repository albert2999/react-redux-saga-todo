import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import todoReducer from "./ducks/todo";
import quoteReducer from "./ducks/quote";
import { watcherSaga } from "./sagas/rootSaga";
 

const reducer = combineReducers({
    quote: quoteReducer,
    todo: todoReducer,
})

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(reducer, {}, applyMiddleware(...middleware));

sagaMiddleware.run(watcherSaga);

export default store
