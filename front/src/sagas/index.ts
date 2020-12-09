import { fork } from "redux-saga/effects";

import trackSaga from "./trackSaga";
import artistSaga from "./artistSaga"
import albumSaga from "./albumSaga";


export default function* rootSaga () {
  yield fork(trackSaga);
  yield fork(artistSaga);
  yield fork(albumSaga);
};