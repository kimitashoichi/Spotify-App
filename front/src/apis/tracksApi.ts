import axios from "axios";

import * as Models from "../models/TrackModel";

// 曲名検索
export const getTracks = async (serachKey: Models.searchKey) => {
  const tracks: Models.trackType[] = 
  await axios
    .get<Models.tracksJsonType>(
      `https://api.spotify.com/v1/search?q=${serachKey.searchInput}&type=track`,
      {
        headers: { Authorization: "Bearer " + serachKey.token },
      }
    )
    .then((response) => response.data)
    .then<Array<Models.trackType>>((res) => {
      console.log('track response', res);
      const data = res.tracks.items.map((item) => ({
        id: item.id,
        name: item.name,
        artists: item.artists[0].name,
        playUrl: item.preview_url,
        image: item.album.images[1]
      }));
      return Promise.resolve(data);
    })
    .catch((error) => Promise.reject(new Error(error)));
  
  return { tracks }
}


//  詳細表示-基本情報取得
export const getTrackDetails = async (getDetailKey: Models.getDetailKey) => {
  const track: Models.trackType = 
  await axios
    .get<Models.trackType>(
      `https://api.spotify.com/v1/tracks/${getDetailKey.trackId}`,
      {
        headers: { Authorization: "Bearer " + getDetailKey.token },
      }
    )
    .then((response) => response.data)
    .then<Models.trackType>((res) => {
      console.log('track response', res);
      const data = {
        id: res.id,
        name: res.name,
        artists: res.artists,
        playUrl: res.playUrl,
        image: res.image
      };
      return Promise.resolve(data);
    })
    .catch((error) => Promise.reject(new Error(error)));
  
  return { track }
}