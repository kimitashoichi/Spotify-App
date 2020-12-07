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