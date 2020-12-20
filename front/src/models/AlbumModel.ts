import * as spotifyRequestType from "../constants/spotifyRequestType";

export interface albumState {
  albums: albumType[];
  albumTracks: albumTracks;
  isLoading: boolean;
}

export interface albumType {
  id: string;
  name: string;
  artist: string;
  image: {
    height: number;
    url: string;
    width: number;
  };
}

export interface albumTracks {
  tracks: albumTrack[];
  album: {
    url: string;
    height: number;
    width: number;
    name: string;
  };
}

export interface albumTrack {
  id: string;
  name: string;
  tarckNumber: number;
  artist: string[];
}

export interface albumJsonType {
  albums: {
    href: string;
    items: albumItems[];
    limit: number;
    next: string;
    offset: number;
    previous: string | null;
    total: number;
  };
}

export interface albumItems {
  album_type: string;
  artists: artists[];
  available_markets: string[];
  href: string;
  id: string;
  images: {
    height: number;
    url: string;
    width: number;
  }[];
  name: string;
  release_date: string;
  release_date_percision: string;
  total_tracks: number;
  type: string;
  uri: string;
}

export interface artists {
  external_urls: { [key: string]: string };
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

// いづれは全てのモデルで共通化する
export interface searchKey {
  token: string;
  searchInput: string
}

// アーティストのTOP曲を取得する時に使用するキー
// 実質的にserachKeyと中身は変わらないがわかりやすくするために名前だけ変更する
export interface requestKey {
  token: string;
  albumId: string;
  image: {
    url: string;
    name: string;
    height: number;
    width: number;
  };
}

// TOP画面-アルバム検索
export interface GetAlbumsStart {
  type: typeof spotifyRequestType.GET_ALBUMS_START;
  payload: searchKey;
}

export interface GetAlbumsSucces {
  type: typeof spotifyRequestType.GET_ALBUMS_SUCCESS;
  payload: albumType[];
}

export interface GetAlbumsFaluer {
  type: typeof spotifyRequestType.GET_ALBUMS_FAILURE;
}

// TOP画面-アルバム曲取得
export interface GetAlbumTracksStart {
  type: typeof spotifyRequestType.GET_ALBUM_TRACKS_START;
  payload: requestKey;
}

export interface GetAlbumTracksSucces {
  type: typeof spotifyRequestType.GET_ALBUM_TRACKS_SUCCESS;
  payload: albumTracks;
}

export interface GetAlbumTracksFaluer {
  type: typeof spotifyRequestType.GET_ALBUM_TRACKS_FAILURE;
}

export type albumAction =
  | GetAlbumsStart
  | GetAlbumsSucces
  | GetAlbumsFaluer
  | GetAlbumTracksStart
  | GetAlbumTracksSucces
  | GetAlbumTracksFaluer;
