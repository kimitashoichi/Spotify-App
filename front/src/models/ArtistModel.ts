import * as spotifyRequestType from "../constants/spotifyRequestType";
import { trackType } from "./TrackModel";

export interface artistState {
  artist: artistType[];
  topTracks: artistTopTracks;
  isLoading: boolean;
}

export interface artistType {
  id: string;
  name: string;
  image: {
    height: number;
    url: string;
    width: number;
  };
}

export interface artistJsonType {
  artists: {
    href: string;
    items: artistsItems[];
    limit: number;
    next: string;
    offset: number;
    previous: string | null;
    total: number;
  };
}

// アーティスト検索結果からTOPトラックを取得する時のモデル
export interface artistTopTracks {
  tracks: trackType[];
  artist: {
    name: string;
    image: string
  }
}

interface artistsItems {
  external_urls: {};
  followers: {
    href: string;
    total: number;
  };
  genres: string[];
  href: string;
  id: string;
  images: {
    height: number;
    url: string;
    width: number;
  }[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
}

// いづれは全てのモデルで共通化する
export interface searchKey {
  token: string;
  searchInput: string;
}

// アーティストのTOP曲を取得する時に使用するキー
// 実質的にserachKeyと中身は変わらないがわかりやすくするために名前だけ変更する
export interface requestKey {
  token: string;
  artistId: string;
  name: string;
  image: string;
}

// TOP画面でのアーティスト検索
export interface GetArtistStart {
  type: typeof spotifyRequestType.GET_ARTISTS_START;
  payload: searchKey;
}

export interface GetArtistSucces {
  type: typeof spotifyRequestType.GET_ARTISTS_SUCCESS;
  payload: artistType[];
}

export interface GetArtistFaluer {
  type: typeof spotifyRequestType.GET_ARTISTS_FAILURE;
}


// アーティスト検索結果からTOP曲情報を取得
export interface GetArtistTopTracksStart {
  type: typeof spotifyRequestType.GET_ARTIST_TOP_TRACK_START;
  payload: requestKey;
}

export interface GetArtistTopTracksSucces {
  type: typeof spotifyRequestType.GET_ARTIST_TOP_TRACK_SUCCESS;
  payload: artistTopTracks;
}

export interface GetArtistTopTracksFaluer {
  type: typeof spotifyRequestType.GET_ARTIST_TOP_TRACK_FAILURE;
}

export type artistAction =
  | GetArtistStart
  | GetArtistSucces
  | GetArtistFaluer
  | GetArtistTopTracksStart
  | GetArtistTopTracksSucces
  | GetArtistTopTracksFaluer;
