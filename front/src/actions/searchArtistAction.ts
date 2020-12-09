import * as AcitonType from "../constants/spotifyRequestType";
import * as Models from "../models/ArtistModel";

export const getArtistAction = {
  start: (payload: Models.searchKey) => ({
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