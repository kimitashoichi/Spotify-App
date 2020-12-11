import * as spotifyRequestType from "../constants/spotifyRequestType";
import { albumItems, artists } from "./AlbumModel";

export interface trackState {
  tracks: trackType[];
  track: trackType;
  trackParams: trackParams;
  isLoading: boolean;
}

export interface trackType {
  id: string;
  name: string;
  artists: string;
  playUrl: string | null;
  image: {
    height: number;
    url: string;
    width: number;
  }
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

//  Storeに保管するデータ形式
export interface trackParams {
  acousticness: number;
  danceability: number;
  energy: number;
  instrumentalness: number;
  liveness: number;
  valence: number;
}

//  この形式でSpotifyからのレスポンスを受け取る
export interface trackJsonParams {
  duration_ms: number;
  key: number;
  mode: number;
  time_signature: number;
  acousticness: number;
  danceability: number;
  energy: number;
  instrumentalness: number;
  liveness: number;
  loudness: number;
  speechiness: number;
  valence: number;
  tempo: number;
  id: string;
  uri: string,
  track_href: string;
  analysis_url: string;
  type: string;
}


// いづれは全てのモデルで共通化する
export interface searchKey {
  token: string;
  searchInput: string;
}

// いづれは全てのモデルで共通化する
export interface getDetailKey {
  token: string;
  trackId: string;
}

// 曲検索
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


// 詳細表示-基本情報取得
export interface GetTrackDetailsStart {
  type: typeof spotifyRequestType.GET_TRACK_DETAILS_START;
  payload: getDetailKey;
}

export interface GetTrackDetailsSucces {
  type: typeof spotifyRequestType.GET_TRACK_DETAILS_SUCCESS;
  payload: trackType;
}

export interface GetTrackDetailsFaluer {
  type: typeof spotifyRequestType.GET_TRACK_DETAILS_FAILURE;
}


// 詳細表示-パラメータ取得
export interface GetTrackParametersStart {
  type: typeof spotifyRequestType.GET_TRACK_PARAMETERS_START;
  payload: getDetailKey;
}

export interface GetTrackParametersSucces {
  type: typeof spotifyRequestType.GET_TRACK_PARAMETERS_SUCCESS;
  payload: trackParams;
}

export interface GetTrackParametersFaluer {
  type: typeof spotifyRequestType.GET_TRACK_PARAMETERS_FAILURE;
}

export type trackAction =
  | GetTracksStart
  | GetTracksSucces
  | GetTracksFaluer
  | GetTrackDetailsStart
  | GetTrackDetailsSucces
  | GetTrackDetailsFaluer
  | GetTrackParametersStart
  | GetTrackParametersSucces
  | GetTrackParametersFaluer;
