import { all, call, fork, put, takeEvery } from 'redux-saga/effects';

import * as Model from "../models/TrackModel";
import * as ActionTypes from "../constants/spotifyRequestType";
import * as API from "../apis/tracksApi";
import {
  getTracksAction,
  getTrackDetailsAction,
  getTrackParametersAction
} from "../actions/trackAction";

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

export function* getTrackDetailsSaga (action: Model.GetTrackDetailsStart) {
  const accsessKey = action.payload;
  const handler = API.getTrackDetails;
  const { track, error } = yield call(handler, accsessKey);
  if (track && !error) {
    console.log("success get track Details!");
    yield put(getTrackDetailsAction.success(track))
  } else {
    console.log("fail get track Details!");
    yield put(getTrackDetailsAction.faluer());
  }
};

export function* getTrackParamertersSaga (action: Model.GetTrackDetailsStart) {
  const accsessKey = action.payload;
  const handler = API.getTrackParameters;
  const { track, error } = yield call(handler, accsessKey);
  if (track && !error) {
    console.log("success get track Params!");
    yield put(getTrackParametersAction.success(track))
  } else {
    console.log("fail get track Params!");
    yield put(getTrackParametersAction.faluer());
  }
};

export function* watchTracks () {
  yield takeEvery(ActionTypes.GET_TRACKS_START, getTracksSaga);
  yield takeEvery(ActionTypes.GET_TRACK_DETAILS_START, getTrackDetailsSaga);
  yield takeEvery(ActionTypes.GET_TRACK_PARAMETERS_START, getTrackParamertersSaga)
};

export default function* rootSaga () {
  yield all([fork(watchTracks)]);
};