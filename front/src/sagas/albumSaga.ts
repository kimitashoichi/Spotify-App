import { all, call, fork, put, takeEvery } from 'redux-saga/effects';

import * as Model from "../models/AlbumModel";
import * as ActionTypes from "../constants/spotifyRequestType";
import * as API from "../apis/albumApi";
import {
  getAlbumAction
} from "../actions/searchAlbumAction";

export function* getAlbumSaga (action: Model.GetAlbumsStart) {
  const accsessKey = action.payload;
  const handler = API.getAlbum;
  const { album, error } = yield call(handler, accsessKey);
  if (album && !error) {
    console.log("success get album list!");
    yield put(getAlbumAction.success(album));
  } else {
    console.log("fail get album list!");
    yield put(getAlbumAction.failure());
  }
};

export function* watchAlbums () {
  yield takeEvery(ActionTypes.GET_ALBUMS_START, getAlbumSaga);
};

export default function* rootSaga () {
  yield all([fork(watchAlbums)]);
};
