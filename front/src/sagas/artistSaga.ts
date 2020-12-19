import { all, call, fork, put, takeEvery } from 'redux-saga/effects';

import * as Model from "../models/ArtistModel";
import * as ActionTypes from "../constants/spotifyRequestType";
import * as API from "../apis/artistApi";
import {
  getArtistAction,
  getArtistTopTracksAction
} from "../actions/artistAction";
import { Action } from 'history';

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

export function* getArtistTopTracksSaga (action: Model.GetArtistTopTracksStart) {
  const accsessKey = action.payload;
  const handler = API.getArtistTopTracks;
  const { topTracks, error } = yield call(handler, accsessKey);
  if (topTracks && !error) {
    console.log("success get artist topTracks!");
    yield put(getArtistTopTracksAction.success(topTracks));
  } else {
    console.log("fail get artist topTracks!");
    yield put(getArtistTopTracksAction.failure());
  }
};

export function* watchArtists () {
  yield takeEvery(ActionTypes.GET_ARTISTS_START, getArtistSaga);
  yield takeEvery(ActionTypes.GET_ARTIST_TOP_TRACK_START, getArtistTopTracksSaga)
};

export default function* rootSaga () {
  yield all([fork(watchArtists)]);
};
