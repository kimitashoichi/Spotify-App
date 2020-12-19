import { Reducer } from "redux";

import * as ActionType from "../constants/spotifyRequestType";
import * as Models from "../models/AlbumModel";

const initialState: Models.albumState = {
  albums: [],
  albumTracks: [],
  isLoading: false
};

const albumReducer: Reducer<Models.albumState, Models.albumAction> = (
  state: Models.albumState = initialState,
  action: Models.albumAction
): Models.albumState => {
  switch (action.type) {
    case ActionType.GET_ALBUMS_START:
      return {
        ...state,
        isLoading: true
      }
    case ActionType.GET_ALBUMS_SUCCESS:
      return {
        ...state,
        albums: action.payload,
        isLoading: false
      }
    case ActionType.GET_ALBUMS_FAILURE:
      return {
        ...state,
        isLoading: false
      }
    case ActionType.GET_ALBUM_TRACKS_START:
      return {
        ...state,
        isLoading: true
      }
    case ActionType.GET_ALBUM_TRACKS_SUCCESS:
      return {
        ...state,
        albumTracks: action.payload,
        isLoading: false
      }
    case ActionType.GET_ALBUM_TRACKS_FAILURE:
      return {
        ...state,
        isLoading: false
      }
    default:
      return state;
  }
};

export default albumReducer;
