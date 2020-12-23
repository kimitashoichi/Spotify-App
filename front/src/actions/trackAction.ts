import * as ActionType from "../constants/spotifyRequestType";
import * as Models from "../models/TrackModel";


//  曲検索
export const getTracksAction = {
  start: (payload: Models.searchKey) => ({
    type: ActionType.GET_TRACKS_START as typeof ActionType.GET_TRACKS_START,
    payload: payload
  }),
  success: (payload: Models.trackType[]) => ({
    type: ActionType.GET_TRACKS_SUCCESS as typeof ActionType.GET_TRACKS_SUCCESS,
    payload: payload
  }),
  faluer: () => ({
    type: ActionType.GET_TRACKS_FAILURE as typeof ActionType.GET_TRACKS_FAILURE
  })
};


//  曲詳細表示-基本情報取得
export const getTrackDetailsAction = {
  start: (payload: Models.getDetailKey) => ({
    type: ActionType.GET_TRACK_DETAILS_START as typeof ActionType.GET_TRACK_DETAILS_START,
    payload: payload
  }),
  success: (payload: Models.trackBasicDetail) => ({
    type: ActionType.GET_TRACK_DETAILS_SUCCESS as typeof ActionType.GET_TRACK_DETAILS_SUCCESS,
    payload: payload
  }),
  faluer: () => ({
    type: ActionType.GET_TRACK_DETAILS_FAILURE as typeof ActionType.GET_TRACK_DETAILS_FAILURE
  })
};


//  曲詳細表示-パラメータ取得
export const getTrackParametersAction = {
  start: (payload: Models.getDetailKey) => ({
    type: ActionType.GET_TRACK_PARAMETERS_START as typeof ActionType.GET_TRACK_PARAMETERS_START,
    payload: payload
  }),
  success: (payload: Models.trackParams) => ({
    type: ActionType.GET_TRACK_PARAMETERS_SUCCESS as typeof ActionType.GET_TRACK_PARAMETERS_SUCCESS,
    payload: payload
  }),
  faluer: () => ({
    type: ActionType.GET_TRACK_PARAMETERS_FAILURE as typeof ActionType.GET_TRACK_PARAMETERS_FAILURE
  })
};