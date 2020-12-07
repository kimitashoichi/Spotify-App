import axios from "axios";

import * as Models from "../models/TrackModel";

// 曲名検索
export const getTracks = async (serachKey: Models.searchKey): Promise<Array<Models.trackType>> => {
  return await axios
  .get<Models.tracksJsonType>(
    `https://api.spotify.com/v1/search?q=${serachKey.searchInput}&type=track`,
    {
      headers: { Authorization: "Bearer " + serachKey.token },
    }
  )
  .then(res => res.data)
  .then<Array<Models.trackType>>(data => {
    const tracks = data.tracks.items.map((track) => ({
      id: track.id,
      name: track.name,
      artists: track.artists[0].name,
      playUrl: track.preview_url,
      isLoading: false
    }));

    console.log('tracks' ,tracks)
    return Promise.resolve(tracks);
  }).catch(error => Promise.reject(new Error(error)))
}