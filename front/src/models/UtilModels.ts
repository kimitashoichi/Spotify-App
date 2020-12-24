// 検索コンポーネントで使用するリクエストモデル
export interface searchKey {
  token: string;
  searchInput: string;
}

export interface getDetailKey {
  token: string;
  trackId: string;
}

// アーティストのTOP曲を取得する時に使用するキー
// 実質的にserachKeyと中身は変わらないがわかりやすくするために名前だけ変更する
export interface ArtistTopTracksRequestKey {
  token: string;
  artistId: string;
  name: string;
  image: string;
}

// アルバムのTOP曲を取得する時に使用するキー
// 実質的にserachKeyと中身は変わらないがわかりやすくするために名前だけ変更する
export interface albumTracksRequestKey {
  token: string;
  albumId: string;
  image: {
    url: string;
    name: string;
    height: number;
    width: number;
  };
}

