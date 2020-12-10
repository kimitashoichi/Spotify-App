import React from "react";
import { connect } from "react-redux";

import * as Models from "../../models/AlbumModel";
import { AppState } from "../../models";

interface Props {
  album: Models.albumType[];
}

const AlbumLayoutComponent: React.FC<Props> = ({
  album
}) => {
  return (
    <>
      {
        album.length > 0 ? album.map(album =>
          <div key={album.id} className="album">
            <img 
              alt={album.name}
              src={album.image === undefined ? undefined : album.image.url}
            />
            <h3>{album.name}</h3>
            <p>By {album.artist}</p>
          </div>
        )
        : <><p>Now Loading Album....</p></>
      }
  </>
  )
};

const mapStateToProps = (state: AppState) => ({
  album: state.album.albums
})

export default connect(
  mapStateToProps
)(AlbumLayoutComponent);
