import * as spotifyRequestType from "../constants/spotifyRequestType";

export interface artistState {
  artist: artistType[];
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

export type artistAction =
  | GetArtistStart
  | GetArtistSucces
  | GetArtistFaluer
