import * as ActionType from "../constants/spotifyRequestType";
import * as Models from "../models/TrackModel";

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