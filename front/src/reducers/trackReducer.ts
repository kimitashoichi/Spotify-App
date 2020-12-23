import { Reducer } from "redux";

import * as ActionType from "../constants/spotifyRequestType";
import * as Models from "../models/TrackModel";

const initialState: Models.trackState = {
  tracks: [],
  track: {
    id: "",
    name: "",
    artists: [],
    playUrl: "",
    image: {
      height: 0,
      url: "",
      width: 0,
    }
  },
  trackParams: {
    acousticness: 0,
    danceability: 0,
    energy: 0,
    instrumentalness: 0,
    liveness: 0,
    valence: 0,
  },
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
    case ActionType.GET_TRACK_DETAILS_START:
      return {
        ...state,
        isLoading: true
      }
    case ActionType.GET_TRACK_DETAILS_SUCCESS:
      return {
        ...state,
        track: action.payload,
        isLoading: false
      }
    case ActionType.GET_TRACK_DETAILS_FAILURE:
      return {
        ...state,
        isLoading: false
      }
    case ActionType.GET_TRACK_PARAMETERS_START:
      return {
        ...state,
        isLoading: true
      }
    case ActionType.GET_TRACK_PARAMETERS_SUCCESS:
      return {
        ...state,
        trackParams: action.payload,
        isLoading: false
      }
    case ActionType.GET_TRACK_PARAMETERS_FAILURE:
      return {
        ...state,
        isLoading: false
      }
    default:
      return state;
  }
};

export default trackReducer;
