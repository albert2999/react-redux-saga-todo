import {takeLatest} from "redux-saga/effects";
import { handleGetQuote } from "./handlers/quote";
import { GET_QUOTE } from "../ducks/quote";

export function* watcherSaga(){
    yield takeLatest(GET_QUOTE, handleGetQuote)
} 
