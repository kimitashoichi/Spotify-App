import { all, call, fork, put, takeEvery } from 'redux-saga/effects';

import * as Model from "../models/ArtistModel";
import * as ActionTypes from "../constants/spotifyRequestType";
import * as API from "../apis/artistApi";
import {
  getArtistAction
} from "../actions/searchArtistAction";

export function* getArtistSaga (action: Model.GetArtistStart) {
  const accsessKey = action.payload;
  const handler = API.getArtist;
  const { artist, error } = yield call(handler, accsessKey);
  if (artist && !error) {
    console.log("success get artist list!");
    yield put(getArtistAction.success(artist));
  } else {
    console.log("fail get artist list!");
    yield put(getArtistAction.failure());
  }
};

export function* watchArtists () {
  yield takeEvery(ActionTypes.GET_ARTISTS_START, getArtistSaga);
};

export default function* rootSaga () {
  yield all([fork(watchArtists)]);
};
