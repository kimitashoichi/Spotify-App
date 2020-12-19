import axios from "axios";

import * as Models from "../models/ArtistModel";
import * as TrackModel from "../models/TrackModel";

// アーティスト検索
export const getArtist = async (searchKey: Models.searchKey) => {
  const artist = 
  await axios
    .get<Models.artistJsonType>(
      `https://api.spotify.com/v1/search?q=${searchKey.searchInput}&type=artist`,
      { headers : { Authorization: "Bearer " + searchKey.token }}
    )
    .then((response) => response.data)
    .then((res) => {
      const data = res.artists.items.map((item) => ({
        id: item.id,
        name: item.name,
        image: item.images[1]
      }));
      return Promise.resolve(data);
    })
    .catch((error) => Promise.reject(new Error(error)));
  
  return { artist };
}


// アーティスト検索
export const getArtistTopTracks = async (requestKey: Models.requestKey) => {
  const topTracks: TrackModel.trackType[] = 
  await axios
    .get(
      `https://api.spotify.com/v1/artists/${requestKey.artistId}/top-tracks?market=JP`,
      { headers : { Authorization: "Bearer " + requestKey.token }}
    )
    .then((response) => response.data)
    .then((res) => {
      const data = res.tracks.map((item: any) => ({
        id: item.id,
        name: item.name,
        artists: item.artists[0].name,
        playUrl: item.preview_url,
        image: item.album.images[1]
      }));
      console.log('top track data', data);
      return Promise.resolve(data);
    })
    .catch((error) => Promise.reject(new Error(error)));
  
  return { topTracks };
}