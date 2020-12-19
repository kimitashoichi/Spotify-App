import * as AcitonType from "../constants/spotifyRequestType";
import * as Models from "../models/AlbumModel";

export const getAlbumAction = {
  start: (payload: Models.searchKey) => ({
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

export const getAlbumTracksAction = {
  start: (payload: Models.requestKey) => ({
    type: AcitonType.GET_ALBUM_TRACKS_START as typeof AcitonType.GET_ALBUM_TRACKS_START,
    payload: payload
  }),
  success: (payload: Models.albumTracks[]) => ({
    type: AcitonType.GET_ALBUM_TRACKS_SUCCESS as typeof AcitonType.GET_ALBUM_TRACKS_SUCCESS,
    payload: payload
  }),
  failure: () => ({
    type: AcitonType.GET_ALBUM_TRACKS_FAILURE as typeof AcitonType.GET_ALBUM_TRACKS_FAILURE
  })
};