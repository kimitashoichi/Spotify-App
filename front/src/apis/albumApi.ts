import axios from "axios";

import * as Models from "../models/AlbumModel";

// アルバム検索
export const getAlbum = async (searchKey: Models.searchKey) => {
  const album = 
  await axios
    .get<Models.albumJsonType>(
      `https://api.spotify.com/v1/search?q=${searchKey.searchInput}&type=album`,
      { headers : { Authorization: "Bearer " + searchKey.token }}
    )
    .then((response) => response.data)
    .then((res) => {
      const data = res.albums.items.map((item) => ({
        id: item.id,
        name: item.name,
        artist: item.artists[0].name,
        image: item.images[1]
      }));
      return Promise.resolve(data);
    })
    .catch((error) => Promise.reject(new Error(error)));
  
  return { album };
}

// アルバムの曲取得
export const getAlbumTracks = async (requestKey: Models.requestKey) => {
  const albumTracks: Models.albumTracks[] = 
  await axios
    .get(
      `https://api.spotify.com/v1/albums/${requestKey.albumId}/tracks?market=JP`,
      { headers : { Authorization: "Bearer " + requestKey.token }}
    )
    .then((response) => response.data)
    .then((res) => {
      console.log('album tracks data', res.items);
      const data = res.items.map((item: any) => ({
        id: item.id,
        name: item.name,
        artist: item.artists[0].name,
      }));
      return Promise.resolve(data);
    })
    .catch((error) => Promise.reject(new Error(error)));
  
  return { albumTracks };
}