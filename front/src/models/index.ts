import { trackState } from "./TrackModel";
import { albumState } from "./AlbumModel";
import { artistState } from "./ArtistModel";

export interface AppState {
  track: trackState;
  album: albumState;
  artist: artistState;
}