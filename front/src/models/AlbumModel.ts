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