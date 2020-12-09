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
      const data = res.tracks.items.map((item) => ({
        id: item.id,
        name: item.name,
        artists: item.artists[0].name,
        playUrl: item.preview_url,
      }));
      return Promise.resolve(data);
    })
    .catch((error) => Promise.reject(new Error(error)));
  
  return { tracks }
}