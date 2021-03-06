import { all, call, fork, put, takeEvery } from 'redux-saga/effects';

import * as Model from "../models/AlbumModel";
import * as ActionTypes from "../constants/spotifyRequestType";
import * as API from "../apis/albumApi";
import {
  getAlbumAction,
  getAlbumTracksAction
} from "../actions/albumAction";

export function* getAlbumSaga (action: Model.GetAlbumsStart) {
  const accsessKey = action.payload;
  const handler = API.getAlbum;
  const { album, error } = yield call(handler, accsessKey);
  if (album && !error) {
    yield put(getAlbumAction.success(album));
  } else {
    yield put(getAlbumAction.failure());
  }
};

export function* getAlbumTracksSaga (action: Model.GetAlbumTracksStart) {
  const accsessKey = action.payload;
  const handler = API.getAlbumTracks;
  const { albumTracks, error } = yield call(handler, accsessKey);
  if (albumTracks && !error) {
    yield put(getAlbumTracksAction.success(albumTracks));
  } else {
    yield put(getAlbumTracksAction.failure());
  }
};

export function* watchAlbums () {
  yield takeEvery(ActionTypes.GET_ALBUMS_START, getAlbumSaga);
  yield takeEvery(ActionTypes.GET_ALBUM_TRACKS_START, getAlbumTracksSaga);
};

export default function* rootSaga () {
  yield all([fork(watchAlbums)]);
};
