import { fork } from "redux-saga/effects";

import trackSaga from "./trackSaga";

export default function* rootSaga () {
  yield fork(trackSaga)
};