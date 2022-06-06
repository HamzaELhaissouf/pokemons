import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { url } from "../../../config";

import { fetchItemsFailure, fetchItemsSuccess } from "../../actions";
import { FETCH_ITEMS_REQUEST } from "../../actionTypes";
import { Item } from './../../types';

const getItems = () =>
  axios.get<Item[]>(`${url}/pokemon`);

/*
  Worker Saga: Fired on FETCH_ITEMS_REQUEST action
*/
function* fetchTodoSaga() : Item[] | any  {
  try {
    const response = yield call(getItems);
    yield put(
      fetchItemsSuccess({
        items: response.data.results,
      })
    );
  } catch (e:any) {
    yield put(
      fetchItemsFailure({
        error: e.message,
      })
    );
  }
}

/*
  Starts worker saga on latest dispatched `FETCH_ITEMS_REQUEST` action.
  Allows concurrent increments.
*/
function* ItemsSaga() {
  yield all([takeLatest(FETCH_ITEMS_REQUEST, fetchTodoSaga)]);
}

export default ItemsSaga;