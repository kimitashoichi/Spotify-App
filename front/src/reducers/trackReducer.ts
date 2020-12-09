import { Reducer } from "redux";

import * as ActionType from "../constants/spotifyRequestType";
import * as Models from "../models/TrackModel";

const initialState: Models.trackState = {
  tracks: [],
  isLoading: false
};

const trackReducer: Reducer<Models.trackState, Models.trackAction> = (
  state: Models.trackState = initialState,
  action: Models.trackAction
): Models.trackState => {
  switch(action.type) {
    case ActionType.GET_TRACKS_START:
      return {
        ...state,
        isLoading: true
      }
    case ActionType.GET_TRACKS_SUCCESS:
      return {
        ...state,
        tracks: action.payload,
        isLoading: false
      }
    case ActionType.GET_TRACKS_FAILURE:
      return {
        ...state,
        isLoading: false
      }
    default:
      return state;
  }
};

export default trackReducer;