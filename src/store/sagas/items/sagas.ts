import axios from "axios";
import { all, call, delay, put, takeEvery, takeLatest } from "redux-saga/effects";
import { url } from "../../../config";

import { fetchItemsFailure, fetchItemsSuccess } from "../../actions";
import { fetchItemDetailsSuccess, loadMoreItemsFailure, loadMoreItemsSuccess, setShowModal } from "../../actions/items/actions";
import { FETCH_ITEMS_REQUEST, FETCH_ITEM_DETAILS_REQUEST, LOAD_MORE_ITEMS_REQUEST } from "../../actionTypes";
import { FetchItemDetailsRequest, Item, LoadMoreItemsRequest } from './../../types';

const getItems = () =>
  axios.get<Item[]>(`${url}/pokemon/?offset=0&limit=20`);

const getItemDetails = (id: number) => axios.get<Item>(`${url}/pokemon/${id}`)

const loadMoreItems = (offset: number) => axios.get<Item>(`${url}/pokemon/?offset=${offset}&limit=20`)

/*
  Worker Saga: Fired on FETCH_ITEMS_REQUEST action
*/
function* fetchItemsSaga(): Item[] | any {
  try {
    const response = yield call(getItems);
    yield put(
      fetchItemsSuccess({
        items: response.data.results,
      })
    );
  } catch (e: any) {
    yield put(
      fetchItemsFailure({
        error: e.message,
      })
    );
  }
}

/*
  Worker Saga: Fired on FETCH_ITEM_DETAILS_REQUEST action
*/
function* fetchItemDetailsSaga(action: FetchItemDetailsRequest): Item | any {
  try {
    const response = yield call(getItemDetails, action.payload.id);
    yield put(
      fetchItemDetailsSuccess({
        item: response.data,
      })
    );
    yield put(
      setShowModal(true)
    );
  } catch (e: any) {
    yield put(
      fetchItemsFailure({
        error: e.message,
      })
    );
  }
}


export function* loadMoreItemsListSaga(action: LoadMoreItemsRequest): Item[] | any {
  const { payload } = action;
  try {
    const response = yield call(loadMoreItems, payload);
    console.log(response);
    yield delay(1500);
    yield put(loadMoreItemsSuccess({ items: response.data.results, next: response.data.next }));
  } catch (e: any) {
    yield put(
      loadMoreItemsFailure({
        error: e.message
      }));
  }
}

/*
  Starts worker saga on latest dispatched `FETCH_ITEMS_REQUEST` action.
  Allows concurrent increments.
*/
function* ItemsSaga() {
  yield takeLatest(FETCH_ITEMS_REQUEST, fetchItemsSaga);
  yield takeLatest(FETCH_ITEM_DETAILS_REQUEST, fetchItemDetailsSaga);
  yield takeEvery(LOAD_MORE_ITEMS_REQUEST, loadMoreItemsListSaga);
}

export default ItemsSaga;