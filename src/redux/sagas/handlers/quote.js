import {call, put} from "redux-saga/effects";
import { setQuote } from "../../ducks/quote";
import { requestGetQuote } from "../request/quote";

export function* handleGetQuote(action) {
    try {
        const response = yield call(requestGetQuote);
        const { data } = response;
        yield put(setQuote(data));
    } catch (error) {
        console.log(error);
    }
}
