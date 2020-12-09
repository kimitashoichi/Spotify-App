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