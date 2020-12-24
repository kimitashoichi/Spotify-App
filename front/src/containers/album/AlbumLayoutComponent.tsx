import React from "react";
import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";

import * as Models from "../../models/AlbumModel";
import { albumTracksRequestKey } from "../../models/UtilModels";
import { AppState } from "../../models";
import LinkComponent from "../LinkComponent";
import {
  getAlbumTracksAction
} from "../../actions/albumAction";
import "./album.css";

interface Props {
  token: string;
  album: Models.albumType[]; 
  getAlbumTracks: (payload: albumTracksRequestKey) => void;
}

const AlbumLayoutComponent: React.FC<Props> = ({
  token,
  album,
  getAlbumTracks
}) => {
  const handleOnAlbumTracks = async (album:  Models.albumType) => {
    const payload: albumTracksRequestKey = {
      albumId: album.id,
      token: token,
      image: {
        height: 300,
        width: 300,
        url: album.image.url,
        name: album.name
      }
    };
    await getAlbumTracks(payload);
  }

  return (
    <>
      {
        album.length > 0 ? album.map(album =>
          <div key={album.id} className="album">
            <LinkComponent src={`/album/${album.id}`}>
              <img 
                alt={album.name}
                src={album.image === undefined ? undefined : album.image.url}
                onClick={() => handleOnAlbumTracks(album)}
              />
            </LinkComponent>
            <h3>{album.name}</h3>
            <p>By {album.artist}</p>
          </div>
        )
        : 
        <>
          <div className="artist">
            <h1>No Result</h1>
            <img
              alt="NoResultImage"
              src="https://i.scdn.co/image/ab67616d00001e0268b12ccdf28b19a63645d245"
            />
          </div>
        </>
      }
  </>
  )
};

const mapStateToProps = (state: AppState) => ({
  album: state.album.albums
});

const mapDispatchToProps = (dispatch: Dispatch) => 
  bindActionCreators({
    getAlbumTracks: payload => getAlbumTracksAction.start(payload)
  }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumLayoutComponent);
