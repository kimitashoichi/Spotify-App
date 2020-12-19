import { Reducer } from "redux";

import * as ActionType from "../constants/spotifyRequestType";
import * as Models from "../models/ArtistModel";

const initialState: Models.artistState = {
  artist: [],
  topTracks: [],
  isLoading: false
};


const artistReducer: Reducer<Models.artistState, Models.artistAction> = (
  state: Models.artistState = initialState,
  action: Models.artistAction
): Models.artistState => {
  switch (action.type) {
    case ActionType.GET_ARTISTS_START:
      return {
        ...state,
        isLoading: true
      }
    case ActionType.GET_ARTISTS_SUCCESS:
      return {
        ...state,
        artist: action.payload,
        isLoading: false
      }
    case ActionType.GET_ARTISTS_FAILURE:
      return {
        ...state,
        isLoading: false
      }
    case ActionType.GET_ARTIST_TOP_TRACK_START:
      return {
        ...state,
        isLoading: true
      }
    case ActionType.GET_ARTIST_TOP_TRACK_SUCCESS:
      return {
        ...state,
        topTracks: action.payload,
        isLoading: false
      }
    case ActionType.GET_ARTIST_TOP_TRACK_FAILURE:
      return {
        ...state,
        isLoading: false
      }
    default:
      return state;
  }
}

export default artistReducer;