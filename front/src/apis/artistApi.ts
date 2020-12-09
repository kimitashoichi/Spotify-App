import axios from "axios";

import * as Models from "../models/ArtistModel";

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