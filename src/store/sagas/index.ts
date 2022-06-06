import { all, fork } from "redux-saga/effects";

import itemsSaga from "./items/sagas";

export function* rootSaga() {
  yield all([fork(itemsSaga)]);
}