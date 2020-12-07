import { all, call, fork, put, takeEvery } from 'redux-saga/effects';

import * as Model from "../models/TrackModel";
import * as ActionTypes from "../constants/spotifyRequestType";
import * as API from "../apis/tracksApi";
import {
  getTracksAction
} from "../actions/searchTrackAction";

export function* getTracksSaga (action: Model.GetTracksStart) {
  const accsessKey = action.payload;
  const handler = API.getTracks;
  const { tracks, error } = yield call(handler, accsessKey);
  if (tracks && !error) {
    console.log("success get track list!");
    yield put(getTracksAction.success(tracks))
  } else {
    console.log("fail get track list!");
    yield put(getTracksAction.faluer());
  }
};

export function* watchTracks () {
  yield takeEvery(ActionTypes.GET_TRACKS_START, getTracksSaga);
};

export default function* rootSaga () {
  yield all([fork(watchTracks)]);
};