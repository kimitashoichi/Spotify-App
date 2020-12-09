import * as spotifyRequestType from "../constants/spotifyRequestType";
import { albumItems, artists } from "./AlbumModel";

export interface trackState {
  tracks: trackType[];
  isLoading: boolean;
}

export interface trackType {
  id: string;
  name: string;
  artists: string;
  playUrl: string | null;
}

export interface tracksJsonType {
  tracks: {
    href: string;
    items: trackItems[];
    limit: number;
    next: string;
    offset: number;
    previous: string | null;
    total: number;
  };
}

interface trackItems {
  album: albumItems;
  artists: artists[];
  avaiable_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: { [key: string]: string };
  external_urls: { [key: string]: string };
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  popularity: number;
  preview_url: string | null;
  track_number: number;
  type: string;
  uri: string;
}

// いづれは全てのモデルで共通化する
export interface searchKey {
  token: string;
  searchInput: string;
}

export interface GetTracksStart {
  type: typeof spotifyRequestType.GET_TRACKS_START;
  payload: searchKey;
}

export interface GetTracksSucces {
  type: typeof spotifyRequestType.GET_TRACKS_SUCCESS;
  payload: trackType[];
}

export interface GetTracksFaluer {
  type: typeof spotifyRequestType.GET_TRACKS_FAILURE;
}

export type trackAction =
  | GetTracksStart
  | GetTracksSucces
  | GetTracksFaluer;
