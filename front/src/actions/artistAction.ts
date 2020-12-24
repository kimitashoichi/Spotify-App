import * as AcitonType from "../constants/spotifyRequestType";
import * as Models from "../models/ArtistModel";
import { trackType } from "../models/TrackModel";
import { searchKey } from "../models/UtilModels";

// アーティスト検索
export const getArtistAction = {
  start: (payload: searchKey) => ({
    type: AcitonType.GET_ARTISTS_START as typeof AcitonType.GET_ARTISTS_START,
    payload: payload
  }),
  success: (payload: Models.artistType[]) => ({
    type: AcitonType.GET_ARTISTS_SUCCESS as typeof AcitonType.GET_ARTISTS_SUCCESS,
    payload: payload
  }),
  failure: () => ({
    type: AcitonType.GET_ARTISTS_FAILURE as typeof AcitonType.GET_ARTISTS_FAILURE
  })
};

// アーティストのTOP取得
export const getArtistTopTracksAction = {
  start: (payload: Models.requestKey) => ({
    type: AcitonType.GET_ARTIST_TOP_TRACK_START as typeof AcitonType.GET_ARTIST_TOP_TRACK_START,
    payload: payload
  }),
  success: (payload: trackType[]) => ({
    type: AcitonType.GET_ARTIST_TOP_TRACK_SUCCESS as typeof AcitonType.GET_ARTIST_TOP_TRACK_SUCCESS,
    payload: payload
  }),
  failure: () => ({
    type: AcitonType.GET_ARTIST_TOP_TRACK_FAILURE as typeof AcitonType.GET_ARTIST_TOP_TRACK_FAILURE
  })
};