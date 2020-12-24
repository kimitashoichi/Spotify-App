import * as AcitonType from "../constants/spotifyRequestType";
import * as Models from "../models/AlbumModel";
import {searchKey } from "../models/UtilModels";

// アルバム検索
export const getAlbumAction = {
  start: (payload: searchKey) => ({
    type: AcitonType.GET_ALBUMS_START as typeof AcitonType.GET_ALBUMS_START,
    payload: payload
  }),
  success: (payload: Models.albumType[]) => ({
    type: AcitonType.GET_ALBUMS_SUCCESS as typeof AcitonType.GET_ALBUMS_SUCCESS,
    payload: payload
  }),
  failure: () => ({
    type: AcitonType.GET_ALBUMS_FAILURE as typeof AcitonType.GET_ALBUMS_FAILURE
  })
};

// アルバム収録曲取得
export const getAlbumTracksAction = {
  start: (payload: Models.requestKey) => ({
    type: AcitonType.GET_ALBUM_TRACKS_START as typeof AcitonType.GET_ALBUM_TRACKS_START,
    payload: payload
  }),
  success: (payload: Models.albumTracks) => ({
    type: AcitonType.GET_ALBUM_TRACKS_SUCCESS as typeof AcitonType.GET_ALBUM_TRACKS_SUCCESS,
    payload: payload
  }),
  failure: () => ({
    type: AcitonType.GET_ALBUM_TRACKS_FAILURE as typeof AcitonType.GET_ALBUM_TRACKS_FAILURE
  })
};