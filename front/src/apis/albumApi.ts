import axios from "axios";

import * as Models from "../models/AlbumModel";
import { searchKey, albumTracksRequestKey } from "../models/UtilModels";

// アルバム検索
export const getAlbum = async (searchKey: searchKey) => {
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
// TODO: とりあえず動いているけど無駄が多いにありそうなコードなので、見直す
export const getAlbumTracks = async (requestKey: albumTracksRequestKey) => {
  const albumTracks: Models.albumTracks = 
  await axios
    .get(
      `https://api.spotify.com/v1/albums/${requestKey.albumId}/tracks?market=JP`,
      { headers : { Authorization: "Bearer " + requestKey.token }}
    )
    .then((response) => response.data)
    .then((res) => {
      const data = res.items.map((item: any) => ({
        id: item.id,
        name: item.name,
        tarckNumber: item.track_number,
        artist: item.artists.map((artist: any) => {
          return artist.name;
        }),
        artistId: item.artists.map((artist: any) => {
          return artist.id;
        })
      }));

      const tracks: Models.albumTracks = {
        tracks: data,
        album: {
          width: 300,
          height: 300,
          url: requestKey.image.url,
          name: requestKey.image.name
        }
      }
      return Promise.resolve(tracks);
    })
    .catch((error) => Promise.reject(new Error(error)));
  
  return { albumTracks };
}